// 読み込み
var file2 = fs.OpenTextFile("tensu.txt", 1);
var str = file2.ReadLine();
WScript.Echo(str);
file2.Close();

// 指定文字数分だけ読み込み
var file3 = fs.OpenTextFile("tensu.txt", 1);
str = file3.Read(3);
WScript.Echo(str);
file.Write("マルペケつくろ～だぜ！");
file2.Close();