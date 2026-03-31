function Skills() {
    const languages = ['Python', 'C++', 'C', 'Java', 'SQL', 'Assembly', 'Bash'];
    const developerTools = ['Linux', 'Git', 'AWS', 'Docker', 'SSH', 'OpenAI Platform', 'GNU', 'Lambda', 'WandB'];
    const frameworks = ['PyTorch', 'OpenAI Gym', 'OpenCV', 'HuggingFace', 'Habitat-Sim', 'Isaac-Sim', 'NumPy', 'Pandas', 'MySQL'];
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">💡Skills</h2>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Languages :</p>
                {languages.map((language) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={language}>
            {language}
          </span>
                ))}
            </div>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Developer Tools :</p>
                {developerTools.map((tool) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={tool}>
            {tool}
          </span>
                ))}
            </div>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Frameworks :</p>
                {frameworks.map((framework) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={framework}>
            {framework}
          </span>
                ))}
            </div>
        </div>

    );
}
export default Skills;