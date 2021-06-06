<h1 align="center">TODO List说明</h1>
<p align="right">张雨婷</p>
<h3>功能实现说明:</h3>
<ul>
  <li>可以添加任务点点击“新建任务”按钮出现输入框和保存按钮
    <p>实现方法：点击“新建任务”可以触发clickShow点击事件，修改组件的className达到显示的效果</p>
  </li>
  <li>已完成任务和未完成任务的颜色区分开
    <p>实现效果：点击复选框进行选中以后，文字上会有删除线效果，并修改的颜色</p>
    <p>实现方法：通过:checked选择器修改文字的css属性，加上text-decoration:line-through;实现删除线效果</p>
  </li>
  <li>添加任务、修改任务状态以及删除时，下面的任务完成数目和任务总数要进行改变
    <p>实现效果：添加任务时总数+1，删除任务总数-1，选中时完成数+1，取消选中完成数-1</p>
    <p>实现方法：点击保存按钮以后，经过判断，并将总件数+1；点击删除按钮以后删除数组内容，并将已完成件数相应-1；在复选框状态变化后，对复选框状态进行判断，若被选中，将数量+1，否则-1并且强制页面刷新</p>
  </li>
  <li>支持任务分组列表
    <p>实现效果：将鼠标移动到列表上，显示移上或移下的按钮，点击以后会将条目移动到相应分组内</p>
    <p>实现方法：点击移上或移下按钮以后，会将当前的数据从原来的数组中删除，添加到另一个数组中</p>
  </li>
  <li>支持任务完成（打勾即完成）
    <p>实现效果：点击复选框，显示粉色的圆中心有一个白色的爱心的效果</p>
    <p>实现方法：使用div标签，设置好宽高、圆角、颜色，在div上放置checkbox，调整好位置，设置opacity为0，点击checkbx改变状态，修改div的css的className达到，选中和未选中不同的效果</p>
  </li>
  <li>支持搜索任务（完成部分）
    <p>实现效果：输入一条数组内的内容，相应的条目会将字体颜色显示成红色</p>
    <p>已实现部分：实现了关键词匹配到数组的内容，则会输出true，但是所有数组内的内容都会显示成红色字体</p>
  </li>
  <li>支持任务打标签（完成部分）
    <p>实现效果：在新建任务中输入“#aaa#bbbbb”,aaa则会成为一个标签显示出来，而bbbbb则会成为列表内容</p>
    <p>已实现部分：实现了取出两个“#”之间的内容并存入到一个数据内输出，在点击保存以后，会将“#”之后的内容存入数组中，并成为列表内容</p>
  </li>
</ul>
<p>最近自学React后，感觉了解了很多，和Vue也有许多区别，感觉上去会比Vue更加简便一点，也学习了很多的方法，但是有一些效果尽管有我自己的想法但是在写代码的时候会卡住，不知道该怎么下手，还有很多困难一点的方法由于经验较少所以很难实现</p>
<h4>遇到的一些难点：</h4>
<ul>
  <li>在修改复选框样式的时候，本来想直接修改checkbox的css，但是宽高的修改有用，但是border-radius并没有效果，所以改成了使用div套在复选框外面，将复选框隐藏从而得到想要的样式</li>
  <li>选中复选框时，文字的删除线效果原本想使用修改className来控制删除线，但是这样的话由于列表内容是遍历数组得到的，所有的列表项都会删除线的效果，所以后来改用了:checked选择器的方法</li>
  <li>下方总数和完成数的改变时，总数很顺利的取到了，但是完成数的数值一直没有传入this.state中</li>
  <li>在删除效果中，点击删除效果以后，页面上的内容并没有删除，但是数组中的数据已经删除，最后找到了this.forceUpdate()的方法</li>
  <li>任务搜索，已经能够判断关键词，但必须要完整的一整条内容才能进行判断，无法进行部分的判断；匹配到数组中数据后，修改className但是只要在数组中的所有列表的内容都会获得className这个属性，所有的列表内容都会有红色字体的效果</li>
  <li>任务打标签，已经实现了取出两个#中的内容，以及#后面的内容，但是存储到的两个#中的内容只能存储在事件中，无法传值到外部的数据中，我也不知道该怎么在事件中进行标签的添加</li>
</ul>
