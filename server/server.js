import path from 'path';
import mime from 'mime-types';
import express from 'express';
import fs from 'fs';
const fsp = fs.promises;
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('dist'));

app.get('/api/images', async (req, res) => {
    const path = req.query["path"];

    if (path) {
        const files = await fsp.readdir(path);
        const filteredFiles = files.filter(file => file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".webp"));

        const fileAndCaptionData = await Promise.all(filteredFiles.map(async (filename) => {
            const fullImagePath = `${path}\\${filename}`;
            const mimeType = mime.lookup(fullImagePath);
            const imageData = await fsp.readFile(fullImagePath, { encoding: "base64" })

            const captionFilename = filename.replace(/\.[^/.]+$/, ".txt");
            let caption = "";

            try {
                const captionPath = `${path}\\${captionFilename}`;
                const captionExists = fs.existsSync(captionPath);
                if (captionExists) {
                    caption = await fsp.readFile(captionPath, { encoding: 'utf8' });
                }
            } catch (e) {
                console.error(`${captionPath} couldn't be read.`);
            }

            return {
                filename,
                caption,
                imageData,
                mimeType
            }
        }));

        const response = {
            total: fileAndCaptionData.length,
            files: fileAndCaptionData
        }

        res.send(response);
    } else {
        res.status(204);
    }
});

app.post("/api/captions", async (req, res) => {

    const body = req.body;

    const { filename, caption } = body;

    console.log(body);

    try {
        await fsp.writeFile(`${filename}`, caption, { flag: 'w' });
    } catch (e) {
        console.error(e);
        console.error("An error occurred trying to write the file");
        return res.status(500);
    }

    const response = {
        filename,
        caption
    }

    return res.json(response);
});

app.get('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})      