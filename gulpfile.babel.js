import gulp from 'gulp';
import util from 'gulp-util';
import run from 'run-sequence';
import {spawn} from 'child_process';
import path from 'path';

// 项目地址
const baseUrl = path.resolve();
const projPath = path.resolve();

const buildFile = util.env._[0] || "main.go"

// 编译
gulp.task('build', () => {
	spawn('go', ['build', "-o", "gowatchfile.exe", buildFile], {
		cwd: projPath,
		env: process.env
	}).on('close', (data) => {
	  	run('run');
	});
})

// 运行
let runProcess
gulp.task('run', () => {
	runProcess && runProcess.kill()
	runProcess = spawn('gowatchfile', [], {
		cwd: projPath,
		env: process.env
	})
	runProcess.stdout.on('data', (data) => {
	  	console.log(`${data}`);
	});
})

// 监听
gulp.task('watch', ['build'],() => {
	gulp.watch([
    projPath + '/**/*.go'
  ], ['build'])

  gulp.watch([
  	projPath + '/**/*.tmpl',
  	projPath + '/**/*.tpl',
  	projPath + '/**/*.html',
  ], ['run'])
})


gulp.task('default', ['watch']);