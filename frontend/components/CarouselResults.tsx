'use client';

export default function CarouselResults({ data }: any) {

    if (!data) return null;

    const downloadTranscript = () => {
        const blob = new Blob([data.transcript], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "transcript.txt";
        a.click();
    };

    const downloadSlides = () => {
        const blob = new Blob([JSON.stringify(data.slides, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "carousel-slides.json";
        a.click();
    };

    return (
        <div style={{ maxWidth: "900px", margin: "60px auto", color: "white" }}>

            <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
                Generated Carousel
            </h2>

            {data.slides.map((slide: string, i: number) => (
                <div
                    key={i}
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "14px",
                        marginBottom: "15px",
                        border: "1px solid rgba(255,255,255,0.08)"
                    }}
                >
                    <strong>Slide {i + 1}</strong>
                    <p>{slide}</p>
                </div>
            ))}

            <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
                <button onClick={downloadSlides}>
                    Download Slides
                </button>

                <button onClick={downloadTranscript}>
                    Download Transcript
                </button>
            </div>

        </div>
    );
}