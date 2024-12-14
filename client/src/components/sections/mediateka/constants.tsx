export const extractThumbnail = (youtubeUrl: string) => {
    try {
        const videoId = youtubeUrl.match(
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        )?.[1];
        if (videoId) {
            // Construct thumbnail URL
            return `https://img.youtube.com/vi/${videoId}/0.jpg`;
        } else {
            alert('Invalid YouTube URL');
            return '';
        }
    } catch (error) {
        console.error('Error extracting thumbnail:', error);
        return '';
    }
};

export const createVideoLinkFromThumbnail = (thumbnailUrl: string) => {
    try {
        const videoId = thumbnailUrl.match(/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]{11})\/0\.jpg/)?.[1];
        if (videoId) {
            // Construct embed video URL
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            alert('Invalid Thumbnail URL');
            return '';
        }
    } catch (error) {
        console.error('Error creating video link:', error);
        return '';
    }
};
export const videoUrls = ["https://youtu.be/OHhNFesuY_8", "https://www.youtube.com/watch?v=d93FPnEpkvI", "https://www.youtube.com/watch?v=H9qbyYYHlOU", "https://www.youtube.com/watch?v=hWU_YjQZqEw"];
export const imageVideos = ["https://nauz.uz/medias/article/big/867/5e03bb5d-9e59-4e4e-afed-028f204ec5b9.jpg", "https://nauz.uz/medias/article/big/865/photo-5474177698881461946-y.jpg"];
export const mediaItems = [
    ...videoUrls.map((url) => ({type: 'VIDEO' as const, url})),
    ...imageVideos.map((url) => ({type: 'IMAGE' as const, url})),
];