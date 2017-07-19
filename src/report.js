'use strict'
const readlineSync = require('readline-sync');//导入模块的方法
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
module.exports = {
    buildReport,
    //buildSingleItem,
    //midNumber,
    //seq
};