'use strict'
const readlineSync = require('readline-sync');//导入模块的方法
const student = require('./student');
const report = require('./report');
global.studentAchievementTotalLists = [];
function Main() {
    console.log(`#1 打印主菜单
#2 添加学生成绩
#3 生成成绩单
#4 退出
===================`);
    let input = readlineSync.question('请输入你的选择（1～4）：');
    if (input == 1) {
        buidMainMenuString();
        return Main();
    } else if (input == 2) {
        let studentAchievementArray = student.addStudentAchievement();
        let i =student.judgeStudentInformation(studentAchievementArray);//参数判断是否合理
        while (i == false) {
            studentAchievementArray = student.againInput();
            i = student.judgeStudentInformation(student.judgeStudentInformation(studentAchievementArray));
        }
        let correctInformation = student.judgeAchievementInformation(studentAchievementArray);
        student.printStudentPrompt(correctInformation);
        return Main();
    } else if (input == 3) {
        report.buildReport(studentAchievementTotalLists);
        return Main();
    } else if (input == 4) {
        exit();
    } else {
        console.log("输入错误请重新输入！");
        return Main();
    }
}
//菜单String
function buidMainMenuString() {
    console.log(`#1 打印主菜单
#2 添加学生成绩
#3 生成成绩单
#4 退出`);
}
//退出
function exit() {
}
//ZL,1,HAN,2,数学:1,语文:2,英语:3,编程:4
Main();

module.exports = {
   // Main,
   // buidMainMenuString,
   // exit
};
