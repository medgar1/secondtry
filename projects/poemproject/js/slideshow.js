<script language="JavaScript">
var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "1.jpg";
path[1] = "2.jpg";
path[2] = "3.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;
</script>
<img height="200" name="slide" src="1.jpg" width="400" />