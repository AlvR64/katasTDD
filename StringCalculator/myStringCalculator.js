class StringCalculator {
  add(numbersString) {

    if(numbersString==""){
      return 0;
    }

   numbersString=numbersString.replace("\n", ",");

    var nums=numbersString.split(",");
    var res=0;

    for(var i=0; i<nums.length; i++){
      try {
        nums[i]=parseInt(nums[i]);
        res+=nums[i];
      } catch (error) {}
    }

    return res;

  }
}

module.exports = {
  StringCalculator
};
