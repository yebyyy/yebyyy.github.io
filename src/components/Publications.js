function Publications() {
    const publications = [
        {
            title: "EmbodiedSplat",
            venue: "ICCV 2025 Main Conference & CVPR 2025 Embodied AI Workshop",
            link: "https://gchhablani.github.io/embodied-splat/",
            details: [
                "Coauthored EmbodiedSplat, a real-to-sim-to-real framework for personalized embodied navigation.",
                "Combined 3D Gaussian Splatting, Habitat-Sim, and mobile-captured scene reconstruction for photorealistic embodied evaluation.",
                "Supported policy learning and deployment across simulation and real-world robot settings."
            ]
        }
    ];

    return (
        <div className="p-10 bg-gradient-to-br from-gray-100 to-gray-200">
            <h2 className="text-2xl font-bold mb-4">📄 Publications</h2>
            <div className="space-y-6">
                {publications.map((publication, index) => (
                    <a key={index} href={publication.link} className="block">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-semibold text-purple-600">{publication.title}</h3>
                            <p className="text-sm font-medium text-gray-500">{publication.venue}</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                {publication.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Publications;
