
export default function VideoFrame({ src }) {
    return (
        <div>
            <div style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: "0"
            }}>
                <iframe src={src}
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen={true}
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                </iframe>
            </div>
        </div>
    )
}
