'use strict'
const studentAchievementTotalLists = [];
//主菜单
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
        let studentAchievementArray = addStudentAchievement();
        let i = judgeStudentInformation(studentAchievementArray);//参数判断是否合理
        while (i == false) {
            studentAchievementArray = againInput();
            i = judgeStudentInformation(judgeStudentInformation(studentAchievementArray));
        }
        let correctInformation = judgeAchievementInformation(studentAchievementArray);
        printStudentPrompt(correctInformation);
        return Main();
    } else if (input == 3) {
        buildReport(studentAchievementTotalLists);
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
//生成字符串
function buildSingleItem(studentList) {
    return `${studentList.name}|${studentList.math}|${studentList.Chinese}|${studentList.English}|${studentList.Programing}|${studentList.sum}|${studentList.ave}`;
}
//生成成绩单
function buildReport(studentAchievementTotalLists) {
    let s = `
成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================\n`;
    let sumtotal = 0;
    for (let i = 0; i < studentAchievementTotalLists.length; i++) {
        if (i != studentAchievementTotalLists.length - 1) {
            s += buildSingleItem(studentAchievementTotalLists[i]) + '\n';
        } else {
            s += buildSingleItem(studentAchievementTotalLists[i]);
        }
        sumtotal += studentAchievementTotalLists[i].sum;
    }
    let mid = midNumber(studentAchievementTotalLists);
    console.log(s + `
========================
总分平均数：${sumtotal / studentAchievementTotalLists.length}
总分中位数：${mid}
========================`)
}
//求中位数
function midNumber(studentAchievementTotalLists) {
    let list = [];//存sum
    for (let i = 0; i < studentAchievementTotalLists.length; i++) {
        list.push(studentAchievementTotalLists[i].sum);
    }
    list.sort(seq);
    let a = list.length;
    console.log(list);
    if (a % 2 == 0) {
        console.log((list[a / 2] + list[a / 2 + 1]) / 2)
        return (list[a / 2] + list[a / 2 + 1]) / 2
    } else {
        console.log(list[parseInt(a / 2)]);
        return list[parseInt(a / 2)];
    }
}
//排序
function seq(a, b) {
    if (a > b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}
//退出
function exit() {
}

Main();
//ZL,1,HAN,2,数学:1,语文:2,英语:3,编程:4