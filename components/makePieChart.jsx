import { Grid, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import React from "react";
import constants from "../src/constants";
import calculateBurden from "../src/calculateBurden";
// import { Chart as ChartJS, registerables } from 'chart.js';
// if(registerables){
// ChartJS.register(...registerables);
// }
import { Chart as ChartJS } from 'chart.js/auto';


const allTasks = constants.allTasks

const backgroundColorList = constants.backgroundColorList
const borderColorList = constants.borderColorList

const myBackColor = constants.myBackColor
const partnerBackColor = constants.partnerBackColor

const myBackColorBorder = constants.myBackColorBorder
const partnerBackColorBorder = constants.partnerBackColorBorder

function makeMyPieData(props){
    const myData = {};
    let a = 0;
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.myTasks[t.name]){
                    if (props.value.myTasks[t.name].participates){
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                        backgroundColor.push(myBackColorBorder);
                        hoverBackgroundColor.push(myBackColorBorder);
                    }
                }
            }
        })
    });
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.myTasks[t.name] && props.value.myTasks[t.name].participates==false){
                    labels.push(t.name);
                    data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                    backgroundColor.push('rgba(0,0,0,0.05)');
                    hoverBackgroundColor.push('rgba(0,0,0,0.05)');
                }
            }
        });
    });
    return {labels: labels, datasets: [{data: data, label: "私", backgroundColor: backgroundColor, hoverBackgroundColor: hoverBackgroundColor,},]};
}



function makePartnerPieData(props){
    const partnerData = {};
    let a = 0;
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.partnerTasks[t.name]){
                    if (props.value.partnerTasks[t.name].participates){
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.partnerTasks[t.name].effort, props.value.partnerTasks[t.name].duration));
                        backgroundColor.push(partnerBackColorBorder);
                        hoverBackgroundColor.push(partnerBackColorBorder);
                    }
                }
            }
        })
    });
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.partnerTasks[t.name] && props.value.partnerTasks[t.name].participates==false){
                    labels.push(t.name);
                    data.push(calculateBurden(props.value.partnerTasks[t.name].effort, props.value.partnerTasks[t.name].duration));
                    backgroundColor.push('rgba(0,0,0,0.05)');
                    hoverBackgroundColor.push('rgba(0,0,0,0.05)');
                }
            }
        });
    });
    return {labels: labels, datasets: [{data: data, label: "パートナー", backgroundColor: backgroundColor, hoverBackgroundColor: hoverBackgroundColor, }]};
}



function makeMyPieDataChanged(props){
    const myData = {};
    let a = 0;
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.myTasks[t.name]){
                    if (props.value.myTasks[t.name].participates){
                        if (props.changedList.includes(t.name)){
                            labels.push(t.name);
                            data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                            backgroundColor.push("rgba(237,185,24)");
                            hoverBackgroundColor.push("rgba(237,185,24)");
                        }else{
                            labels.push(t.name);
                            data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                            backgroundColor.push(myBackColorBorder);
                            hoverBackgroundColor.push(myBackColorBorder);
                        }
                    }
                }
            }
        })
    });
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.myTasks[t.name] && props.value.myTasks[t.name].participates==false){
                    if (props.changedList.includes(t.name)){
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                        backgroundColor.push("rgba(237,185,24)");
                        hoverBackgroundColor.push("rgba(237,185,24)");
                    }else{
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                        backgroundColor.push('rgba(0,0,0,0.05)');
                        hoverBackgroundColor.push('rgba(0,0,0,0.05)');
                    }
                }
            }
        });
    });
    return {labels: labels, datasets: [{data: data, label: "私", backgroundColor: backgroundColor, hoverBackgroundColor: hoverBackgroundColor,},]};
}



function makePartnerPieDataChanged(props){
    const partnerData = {};
    let a = 0;
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.partnerTasks[t.name]){
                    if (props.value.partnerTasks[t.name].participates){
                        if (props.changedList.includes(t.name)){
                            labels.push(t.name);
                            data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                            backgroundColor.push("rgba(237,185,24)");
                            hoverBackgroundColor.push("rgba(237,185,24)");
                        }else{
                            labels.push(t.name);
                            data.push(calculateBurden(props.value.partnerTasks[t.name].effort, props.value.partnerTasks[t.name].duration));
                            backgroundColor.push(partnerBackColorBorder);
                            hoverBackgroundColor.push(partnerBackColorBorder);
                        }
                    }
                }
            }
        })
    });
    allTasks.map(c => {
        c.children.map(t => {
            if (t.checked){
                let category = c.name;
                if (props.value.partnerTasks[t.name] && props.value.partnerTasks[t.name].participates==false){
                    if (props.changedList.includes(t.name)){
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration));
                        backgroundColor.push("rgba(237,185,24)");
                        hoverBackgroundColor.push("rgba(237,185,24)");
                    }else{
                        labels.push(t.name);
                        data.push(calculateBurden(props.value.partnerTasks[t.name].effort, props.value.partnerTasks[t.name].duration));
                        backgroundColor.push(partnerBackColorBorder);
                        hoverBackgroundColor.push(partnerBackColorBorder);
                    }
                }
            }
        });
    });
    return {labels: labels, datasets: [{data: data, label: "パートナー", backgroundColor: backgroundColor, hoverBackgroundColor: hoverBackgroundColor, }]};
}



export default function MakePieChart(props){
    if (props.head == '私'){
        return <Pie
           data={ makeMyPieData(props)}
           options={{
           plugins: {legend: {display: false}},
           responsive: true,
           maintainAspectRatio: true}}
           style={{maxWidth:"300px", maxHeight:"300px"}}
           />
    }else{
        return <Pie
        data={makePartnerPieData(props)}
        options={{
            plugins: {legend: {display: false}},
            responsive: true,
            maintainAspectRatio: true}}
            style={{maxWidth:"300px", maxHeight:"300px"}}
            />
    }        
    // return <Grid container sx={{alignItems: "center", borderBottom: 1, borderColor: "divider"}}>
    // <Grid item xs={6}>
    //     私
    // <Pie
    //    data={ makeMyPieData(props)}
    //    options={{
    //        plugins: {legend: {display: false}},
    //        responsive: false,
    //        maintainAspectRatio: false}}
    //    width={200}
    //    height={200}
    //    />
    // </Grid>
    // <Grid item xs={6}>
    //     パートナー
    // <Pie
    //    data={makePartnerPieData(props)}
    //    options={{
    //        plugins: {legend: {display: false}},
    //        responsive: false,
    //        maintainAspectRatio: false}}
    //    width={200}
    //    height={200}
    //    />
    // </Grid>
    // </Grid>
}