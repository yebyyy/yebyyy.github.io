function Projects() {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">🚀 Projects</h2>
            <div className="space-y-4">
                <a href="https://github.com/yebyyy" className="block">
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-purple-600 hover:text-purple-800">Self-Driving Gaming Agent for Forza Horizon 4</h3>
                        <p className="text-gray-600">Trained behavioral cloning and reinforcement learning policies in PyTorch with visual encoders and mini VLA models; built data preprocessing pipelines and benchmarked reward designs across model architectures.</p>
                    </div>
                </a>
                <a href="https://github.com/yebyyy" className="block">
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-purple-600 hover:text-purple-800">Learning UAV State Estimator</h3>
                        <p className="text-gray-600">Built a multimodal UAV state estimator for GPS-denied environments; engineered a ResNet18 + PCA preprocessing pipeline and trained Linear Regression, MLP, and LSTM models for 12-DOF state prediction.</p>
                    </div>
                </a>
                <a href="https://github.com/yebyyy" className="block">
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-purple-600 hover:text-purple-800">Stable Diffusion 1.5 from Scratch</h3>
                        <p className="text-gray-600">Constructed and optimized a Stable Diffusion v1.5 pipeline with VAE, CLIP, U-Net, and attention mechanisms, integrating HuggingFace pretrained weights for text-to-image and image-to-image generation.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;

