function RelevantCourses() {
    const courses = ["Deep Learning", "Computer Vision", "Perception and Robotics", "Machine Learning", "Data Structures & Algorithms", "Database Systems", "Computer Networking"];
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">📚 Relevant Courses</h2>
            <div className="flex flex-wrap gap-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 rounded-full px-6 py-2 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-sm font-medium text-indigo-900">{course}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default RelevantCourses;
