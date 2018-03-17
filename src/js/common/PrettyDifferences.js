export default class PrettyDifferences {

    static consoleLog(differences) {
        const changedColor = "#fcd203";
        const newColor = "#80f92a";
        const deletedColor = "#e57454";
        const arrayColor = "#c4b0c1";

        for (var i=0;i<differences.length;i++) {
            var path = differences[i].path.join(".");
            if (differences[i].kind==="E") {
                console.log("%cChanged property :" + path,"background:"+changedColor);
                console.log("   GET:",differences[i].lhs);
                console.log("   POST:",differences[i].rhs);
            }
            if (differences[i].kind==="N") {
                console.log("%cNew property:" + path,"background:"+newColor);
                console.log("   GET:",differences[i].lhs);
                console.log("   POST:",differences[i].rhs);
            }
            if (differences[i].kind==="D") {
                console.log("%cDeleted property:" + path,"background:"+deletedColor);
                console.log("   GET:",differences[i].lhs);
                console.log("   POST:",differences[i].rhs);
            }
            if (differences[i].kind==="A" && differences[i].item.kind === "E") {
                console.log("%cArray element %cchanged:" + path + "[" +differences[i].index + "]" ,"background:"+arrayColor,"background:"+changedColor);
                console.log("   GET:",differences[i].item.lhs);
                console.log("   POST:",differences[i].item.rhs);
            }
            if (differences[i].kind==="A" && differences[i].item.kind === "N") {
                console.log("%cArray element %cnew:" + path + "[" +differences[i].index + "]" ,"background:"+arrayColor,"background:"+newColor);
                console.log("   GET:",differences[i].item.lhs);
                console.log("   POST:",differences[i].item.rhs);
            }
            if (differences[i].kind==="A" && differences[i].item.kind === "D") {
                console.log("%cArray element %cnew:" + path + "[" +differences[i].index + "]" ,"background:"+arrayColor,"background:"+deleteColor);
                console.log("   GET:",differences[i].item.lhs);
                console.log("   POST:",differences[i].item.rhs);
            }
        }
    }
}