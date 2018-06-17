---
layout: page
title: Beijing
jsarr: 
- javascript/radar_chart.js
cssar: 
- css/radar_chart.css
---
{::nomarkdown}
<body onload="set_beijing(0)">
<div class="wrapper">
  <h1>China Healthy Cities</h1>
  <h2>What are Chinese cities doing to meet Healthy City 2030 goals?</h2>
  <canvas id="myChart" width=500 height=500></canvas>
</div>
<!-- blue buttons -->
<button class="button1" id="Beijing" onclick="set_beijing(0)">Beijing</button>
<button class="button1" id="Hangzhou" onclick="set_hangzhou(0)">Hangzhou</button>
<button class="button1" id="Hangzhou" onclick="set_chengdu(0)">Chengdu</button>
<button class="button1" id="Hangzhou" onclick="set_shanghai(0)">Shanghai</button>
<br /> <br />
<!-- orange buttons -->
<button class="button2" id="Beijing" onclick="set_beijing(1)">Beijing</button>
<button class="button2" id="Hangzhou" onclick="set_hangzhou(1)">Hangzhou</button>
<button class="button2" id="Hangzhou" onclick="set_chengdu(1)">Chengdu</button>
<button class="button2" id="Hangzhou" onclick="set_shanghai(1)">Shanghai</button>
</body>
{:/}

<p class="message">
  This is an example.
</p>

Beijing page, test.
