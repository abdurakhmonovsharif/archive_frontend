export const formatDate = (created_at: string) => {
    const parseDate = (date: Date) => ({
        date: date.toLocaleDateString('en-GB').replace(/\//g, '.'),
    });

    const docCreatedAt = new Date(created_at);
    return isNaN(docCreatedAt.getTime()) ? parseDate(new Date()) : parseDate(docCreatedAt);
};
