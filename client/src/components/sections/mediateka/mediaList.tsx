import {useState} from "react";
import {Button, Modal, Tabs} from "antd";
import {createVideoLinkFromThumbnail, extractThumbnail, mediaItems} from "./constants.tsx";
import {MediaCard} from "./mediaCard.tsx";

export const MediaList = () => {
    const [activeTab, setActiveTab] = useState("IMAGE");
    const [open, setOpen] = useState(false);
    const {TabPane} = Tabs;

    const createIframe = (url: string) => {
        // Dynamically create an iframe element
        const iframe = document.createElement("iframe");
        iframe.id = "media-video-iframe";
        iframe.width = "800";
        iframe.height = "450";
        iframe.src = `${url}?autoplay=1`;
        iframe.title = "Media Video";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Append iframe to modal content
        const modalContent = document.getElementById("modal-content");
        if (modalContent) {
            modalContent.appendChild(iframe);
        }
    };

    const removeIframe = () => {
        // Remove the iframe element
        const iframe = document.getElementById("media-video-iframe");
        if (iframe) {
            iframe.remove();
        }
    };

    const toggleModal = () => {
        if (open) {
            // Cleanup on closing
            removeIframe();
        }
        setOpen(!open);
    };

    const handleClickMediaCard = (url: string) => {
        if (url.includes("youtube")) {
            setOpen(true);
            setTimeout(() => {
                createIframe(createVideoLinkFromThumbnail(url)); // Create iframe after modal opens
            }, 0);
        }
    };

    return (
        <div>
            <Modal
                className="flex justify-center items-center"
                open={open}
                width={1000}
                closable={false}
                onCancel={toggleModal}
                footer={[
                    <Button key="close" onClick={toggleModal}>
                        Yopish
                    </Button>,
                ]}
            >
                {/* Modal content container for iframe */}
                <div id="modal-content" className="flex justify-center items-center"></div>
            </Modal>
            <div className="flex justify-between items-center">
                <Tabs activeKey={activeTab} onChange={setActiveTab} className="text-white">
                    <TabPane tab="Fotogalereya" key="IMAGE"/>
                    <TabPane tab="Videogalereya" key="VIDEO"/>
                </Tabs>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-4">
                {mediaItems.filter((m) => m.type === activeTab).map((mediaItem) => (
                    <MediaCard
                        key={mediaItem.url} // Unique key for list rendering
                        handleClick={handleClickMediaCard}
                        type={mediaItem.type}
                        title={mediaItem.type}
                        imageUrl={mediaItem.type === "VIDEO" ? extractThumbnail(mediaItem.url) : mediaItem.url}
                    />
                ))}
            </div>
        </div>
    );
};
