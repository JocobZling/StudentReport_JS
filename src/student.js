'use strict'
const readlineSync = require('readline-sync');//导入模块的方法
//第一次添加学生信息及成绩
function addStudentAchievement() {
    let input = readlineSync.question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交\n');
    try {
        var studentAchievementArray = input.split(",");
    } catch (err) {
        console.log("输入错误，返回菜单重新选择！")
        return Main();
    }
    return studentAchievementArray;
}
//打印学生输入的信息
function printStudentPrompt(correctInformation) {
    let string = "";
    let student = [{
        name: correctInformation[0],
        number: correctInformation[1],
        family: correctInformation[2],
        class: correctInformation[3],
        math: (correctInformation[4].split(":"))[1],
        Chinese: (correctInformation[5].split(":"))[1],
        English: (correctInformation[6].split(":"))[1],
        Programing: (correctInformation[7].split(":"))[1],
        sum: parseFloat((correctInformation[4].split(":"))[1]) + parseFloat((correctInformation[5].split(":"))[1]) + parseFloat((correctInformation[6].split(":"))[1]) + parseFloat((correctInformation[7].split(":"))[1]),
        ave: (parseFloat((correctInformation[4].split(":"))[1]) + parseFloat((correctInformation[5].split(":"))[1]) + parseFloat((correctInformation[6].split(":"))[1]) + parseFloat((correctInformation[7].split(":"))[1])) / 4
    }];
    // console.log(student[0].sum);
    // console.log(student[0].ave);
    string += `姓名：${student[0].name}
学号:${student[0].number}
民族:${student[0].family}
班级:${student[0].class}
数学成绩:${student[0].math}
语文成绩:${student[0].Chinese}
英语成绩:${student[0].English}
编程成绩:${student[0].Programing}
================================`
    console.log(string);
    studentAchievementTotalLists.push(student[0]);
    //console.log(studentAchievementTotalLists);
    //return studentAchievementTotalList;
}
//调整输入成绩的顺序
function judgeAchievementInformation(studentAchievementInformation) {
    return studentAchievementInformation;
}
//判断输入数据是否合法
function judgeStudentInformation(studentInformation) {
    if (parseInt(studentInformation.length) == 8 && parseFloat(studentInformation[1]) != NaN && parseFloat(studentInformation[3]) != NaN &&
        parseFloat(studentInformation[4].split(":")[1]) != NaN && parseFloat(studentInformation[5].split(":")[1]) != NaN &&
        parseFloat(studentInformation[6].split(":")[1]) != NaN && parseFloat(studentInformation[7].split(":")[1]) != NaN) {
        return true;
    }
    else {
        return againInput();
    }
}
//不合法后重新输入成绩
function againInput() {
    let input = readlineSync.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n');
    let anginInput = input.split(",");
    return againInput;
}
//需要暴露出去的函数
module.exports = {
    addStudentAchievement,
    printStudentPrompt,
    judgeAchievementInformation,
    judgeStudentInformation,
    againInput
};