function ResearchExperience() {
    const researchExperiences = [
        {
            title: "Research Assistant",
            institution: "Georgia Institute of Technology",
            period: "Aug 2024 – Present",
            details: [
                "Developed EmbodiedSplat, a real-to-sim-to-real framework for personalized embodied navigation with 3D Gaussian Splatting and Habitat-Sim.",
                "Coauthored work accepted at ICCV 2025 Main Conference and CVPR 2025 Embodied AI Workshop.",
                "Trained navigation and mobile manipulation policies with visual encoders, DD-PPO, VLA models, and diffusion policies, improving real-world success rates over zero-shot baselines.",
                "Leveraged 16×A40 GPUs for large-scale pretraining and scene-specific fine-tuning; achieved strong sim-to-real correlation across indoor environments.",
                "Deployed policies on a Stretch mobile robot using a ROS-based remote inference pipeline with camera streams, goal-image localization, and real-time execution."
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
            <h2 className="text-2xl font-bold mb-4">🔬 Research Experience</h2>
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
