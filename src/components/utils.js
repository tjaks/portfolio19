export const fixedBody = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    setTimeout(() => {
        document.body.style.overflow = 'scroll';
        document.body.style.position = 'relative';
    }, 1900);
}