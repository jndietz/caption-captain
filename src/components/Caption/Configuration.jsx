import { Textarea, Button, Group, Box } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

export const Configuration = () => {

    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            template: 'A <drawingType> of a <gender:man|woman> sitting on a <chairType:stool|park bench|office chair>',
        },
    });

    const onSubmit = () => {
        const regex = /(<\w*\:?(\w*\s*|\w*\s*\|)+>)/g;
        const templateString = getValues("template") || "";
        console.log(templateString.match(regex));
    }

    return (
        <Box mx="auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="template"
                    control={control}
                    render={({ field }) => <Textarea
                        {...field}
                        label="Caption Template"
                        autosize
                    />}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}