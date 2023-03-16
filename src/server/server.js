import mime from 'mime-types';
import express from 'express';
import fs from 'fs';
const fsp = fs.promises;
const app = express();
const port = 3000;

app.get('/images', async (req, res) => {
    const path = req.query["path"];
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
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})      