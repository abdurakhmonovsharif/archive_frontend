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
export const videoUrls = ["https://youtu.be/dwczVyune_s", "https://youtu.be/nwkX9UQOYtc", "https://youtu.be/L1TpNdo58D8"];
export const imageVideos = ["https://nauz.uz/medias/article/big/739/20181010-1123491.jpg", "https://nauz.uz/medias/article/big/735/img-20181105-100955.jpg","https://nauz.uz/medias/article/big/799/photo-2022-06-21-10-12-47.jpg","https://nauz.uz/medias/article/big/733/photo-2018-12-12-16-37-22.jpg","https://nauz.uz/medias/article/big/731/photo-2018-12-12-13-08-19.jpg","https://nauz.uz/medias/article/big/738/20181010-112446.jpg"];
export const mediaItems = [
    ...videoUrls.map((url) => ({type: 'VIDEO' as const, url})),
    ...imageVideos.map((url) => ({type: 'IMAGE' as const, url})),
];