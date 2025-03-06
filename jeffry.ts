const coder = {
	name: 'Jeffry Hermanto',
	skills: ['Flutter', 'SvelteKit', 'NestJS', 'PostgreSQL', 'Git'],
	hardWorker: true,
	problemSolver: true,
	hireable: function () {
		return this.hardWorker && this.problemSolver && this.skills.length >= 5;
	}
};
