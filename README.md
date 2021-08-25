# my-tools-eki

#### 安装
```

	npm install my-tools-eki

```

#### 导入
```js

	const myToolEki = require('my-tools-eki')

```

#### 格式化时间
```js
//调用dateFormat()方法，对时间进行格式化
	let str = myToolsEki.dateFormat(new Date())
//输出结果格式：yyyy-mm-dd  hh:mm:ss
```

#### 转义HTML特殊字符
```js
//调用HTMLEscape(),向其中传入一个HTML字符串 <div id="timeSpan1"></div>
	let str = myToolsEki.HTMLEscape('<div id="timeSpan1"></div>')
//输出结果 &lt;div id=&quot;timeSpan1&quot;&gt;&lt;/div&gt;
```

#### 还原HTML字符串
```js
//调用HTMLEscape()方法，传入&lt;div id=&quot;timeSpan1&quot;&gt;&lt;/div&gt;
	let htmlStr = myToolsEki.HTMLEscape(&lt;div id=&quot;timeSpan1&quot;&gt;&lt;/div&gt)
//输出结果 <div id="timeSpan1"></div>
```

## 开源协议
ISC


