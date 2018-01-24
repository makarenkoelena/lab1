function str_len_both(value: string, spaces: boolean=false): number{
let num: number;
if(spaces){
num = value.replace(/\s+/, "").length;
}else{
num = value.length;
}
return num;
}
console.log("Function combined: String length with spaces and all is:"+str_len_both("test 1",false));
console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: "+str_len_both("test 1"));
