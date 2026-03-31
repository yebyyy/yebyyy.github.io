function ResearchExperience() {
    const researchExperiences = [
        {
            title: "Research Assistant",
            institution: "Georgia Institute of Technology",
            period: "Aug 2024 – Present",
            details: [
                "Designed a photorealistic mobile manipulation benchmark using 3D Gaussian Splatting (3DGS) and NVIDIA Isaac Sim for real-to-sim-to-real evaluation.",
                "Developed a reinforcement learning pipeline for Vision-Language-Action (VLA) policies, achieving 20–40% improvement in real-world success rates and 0.87–0.97 sim-to-real correlation.",
                "Studied sim-to-real transfer via personalized training, comparing large-scale pretraining vs scene-specific fine-tuning for π0.5 VLA models.",
                "Implemented and evaluated baseline VLA and modular policies on long-horizon tasks, measuring generalization and robustness across environments.",
                "Deployed policies on a physical robot via a ROS-based pipeline with real-time perception and control integration."
            ]
        },
        {
            title: "Software Engineer",
            institution: "RoboJackets",
            period: "Aug 2024 – May 2025",
            details: [
                "Implemented a GPU-accelerated MPPI controller in Python and C++ for real-time trajectory optimization and robust path following.",
                "Developed and tested navigation and control modules with ROS 2, Gazebo, and custom simulation environments for Mars-like terrain and sensor noise.",
                "Integrated the MPPI planner with LiDAR, IMU, and camera-based state estimation for perception-driven control in partially observable environments."
            ]
        }
    ];

    return (
        <div className="p-10 bg-gradient-to-br from-gray-100 to-gray-200">
            <h2 className="text-2xl font-bold mb-4">🔬 Experience</h2>
            <div className="space-y-6">
                {researchExperiences.map((exp, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-purple-600">{exp.title}</h3>
                        <p className="text-sm font-medium text-gray-500">{exp.institution}, {exp.period}</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ResearchExperience;
