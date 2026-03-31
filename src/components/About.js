function About() {
    return (
        <div className="pt-10 pl-10 pr-10 rounded-lg">
            <h2 className="text-2xl font-bold">📝 About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
                I’m a <span className="font-semibold">Computer Science student at Georgia Tech</span> pursuing a <span className="font-medium">Minor in Robotics</span>. My recent work focuses on <span className="text-indigo-600 font-medium">embodied AI</span>, <span className="text-indigo-600 font-medium">robot navigation</span>, and <span className="text-indigo-600 font-medium">reinforcement learning</span>. I have experience building sim-to-real learning pipelines with Habitat-Sim and deploying policies on real robots with ROS-based systems.
            </p>
        </div>
    );
}
export default About;
