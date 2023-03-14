import { Textarea, Button, Group, Box, TextInput } from '@mantine/core';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

export const getCamelCasedFieldName = (fieldName) => {
    const regex = /(<(\w*):?>?)/;
    const camelCasedFieldName = fieldName.match(regex)[2]
    return camelCasedFieldName;
}

export const getTitleCasedFieldName = (fieldName) => {
    const camelCasedFieldName = getCamelCasedFieldName(fieldName);
    const result = camelCasedFieldName.replace(/([A-Z])/g, " $1");
    const titleCasedFieldName = result.charAt(0).toUpperCase() + result.slice(1);
    return titleCasedFieldName;
}

export const Configuration = () => {

    const { control, handleSubmit, getValues, register, setValue, watch, formState } = useForm({
        defaultValues: {
            template: 'A <drawingType> of a <gender> sitting on a <chairType>',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "templateFields"
    });

    // const watchFieldArray = watch("templateFields");
    // const controlledFields = fields.map((field, index) => {
    //     return {
    //         ...field,
    //         ...watchFieldArray[index]
    //     };
    // });

    const onSubmit = () => {
        const fieldPlaceholders = getFieldPlaceHolders();
        console.log(getValues());
        remove();
        fieldPlaceholders.forEach(placeholder => append({ label: getTitleCasedFieldName(placeholder), name: getCamelCasedFieldName(placeholder) }));
    }

    const handleTemplateOnChange = () => {
        setValue("captionOutput", getValues("template"))
    }

    const getFieldPlaceHolders = () => {
        // TODO eventually support <fieldNames:with|multiple|values>
        //     👇
        const regex = /(<\w*\:?(\w*\s*|\w*\s*\|)+>)/g;
        const templateString = getValues("template") || "";
        const templateFields = templateString.match(regex);
        return templateFields;
    }

    const handleCreateCaption = () => {
        let captionOutput = getValues("template");
        const fieldPlaceHolders = getFieldPlaceHolders();
        fieldPlaceHolders.forEach(placeholder => {
            captionOutput = captionOutput.replace(placeholder, getValues(`templateFields.${getCamelCasedFieldName(placeholder)}.value`));
        });
        console.log(formState);
        setValue("captionOutput", captionOutput);
    }

    const saveCaption = async () => {
        const { data } = await axios.get("/api/images");
        console.log(data);
    }

    return (
        <Box mx="auto">
            <form>
                <Textarea
                    {...register("template", { onChange: () => handleTemplateOnChange() })}
                    label="Caption Template"
                    autosize
                />

                <Group position="right" mt="md">
                    <Button type="button" onClick={() => onSubmit()}>Create Fields</Button>
                </Group>

                {fields && fields.map((field, index) =>
                    <TextInput
                        required={true}
                        label={field.label}
                        key={index}
                        {...register(`templateFields.${field.name}.value`)} />
                )}

                <Textarea
                    {...register('captionOutput')}
                    readOnly={true}
                />

                <Group position="right" mt="md">
                    <Button type="button" onClick={() => handleCreateCaption()}>Generate Caption</Button>
                    <Button type="button" disabled={formState.isValid} onClick={() => saveCaption()}>Save Caption</Button>
                </Group>
            </form>
        </Box>
    );
}