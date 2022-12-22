export const convertToBase64 = (file:File) => {
    return new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
    });
}