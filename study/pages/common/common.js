module.exports = {
  fontSize: fontSize
};
const MAX_SIZE = 100000;
// echars 自适应大小-size：字体大小。maxSize 最大自适应大小
function fontSize(size, maxSize) {
  if (!maxSize) maxSize = MAX_SIZE;
  let result = 1;
  wx.getSystemInfo({
    success: function (res) {
      result = res.pixelRatio;
    }
  })
  result = result * size;
  result = parseInt(result);
  if (result < 0) result = (result * -1);
  return result > maxSize ? maxSize : result;
}