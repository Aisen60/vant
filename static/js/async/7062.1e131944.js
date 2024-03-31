/*! For license information please see 7062.1e131944.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7062"],{51673:function(n,s,t){"use strict";t.r(s);var a=t("69298");let d=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Search \u641C\u7D22</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u641C\u7D22\u573A\u666F\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Search</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Search</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p><code>v-model</code> \u7528\u4E8E\u63A7\u5236\u641C\u7D22\u6846\u4E2D\u7684\u6587\u5B57\uFF0C<code>background</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-jian-jian-ting" tabindex="-1">\u4E8B\u4EF6\u76D1\u542C</h3>\n<p>Search \u7EC4\u4EF6\u63D0\u4F9B\u4E86 <code>search</code> \u548C <code>cancel</code> \u4E8B\u4EF6\uFF0C<code>search</code> \u4E8B\u4EF6\u5728\u70B9\u51FB\u952E\u76D8\u4E0A\u7684\u641C\u7D22/\u56DE\u8F66\u6309\u94AE\u540E\u89E6\u53D1\uFF0C<code>cancel</code> \u4E8B\u4EF6\u5728\u70B9\u51FB\u641C\u7D22\u6846\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n    <span class="hljs-attr">show-action</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n    @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: \u5728 van-search \u5916\u5C42\u589E\u52A0 form \u6807\u7B7E\uFF0C\u4E14 action \u4E0D\u4E3A\u7A7A\uFF0C\u5373\u53EF\u5728 iOS \u8F93\u5165\u6CD5\u4E2D\u663E\u793A\u641C\u7D22\u6309\u94AE\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="sou-suo-kuang-nei-rong-dui-qi" tabindex="-1">\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50</h3>\n<p>\u901A\u8FC7 <code>input-align</code> \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code>\u3001<code>right</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n  <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;center&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-sou-suo-kuang" tabindex="-1">\u7981\u7528\u641C\u7D22\u6846</h3>\n<p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u7981\u7528\u641C\u7D22\u6846\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-bei-jing-se" tabindex="-1">\u81EA\u5B9A\u4E49\u80CC\u666F\u8272</h3>\n<p>\u901A\u8FC7 <code>background</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u641C\u7D22\u6846\u5916\u90E8\u7684\u80CC\u666F\u8272\uFF0C\u901A\u8FC7 <code>shape</code> \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>round</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>\n  <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#4fc08d&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h3>\n<p>\u4F7F\u7528 <code>action</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\u7684\u5185\u5BB9\u3002\u4F7F\u7528\u63D2\u69FD\u540E\uFF0C<code>cancel</code> \u4E8B\u4EF6\u5C06\u4E0D\u518D\u89E6\u53D1\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">show-action</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n  @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span>&gt;</span>\u641C\u7D22<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-search</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(value.<span class="hljs-property">value</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onClickButton,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u8F93\u5165\u7684\u503C</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u641C\u7D22\u6846\u5DE6\u4FA7\u6587\u672C</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>\u540D\u79F0\uFF0C\u4F5C\u4E3A\u63D0\u4EA4\u8868\u5355\u65F6\u7684\u6807\u8BC6\u7B26</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>\u641C\u7D22\u6846\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>round</code></td>\n<td><em>string</em></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>id</td>\n<td>\u641C\u7D22\u6846 id\uFF0C\u540C\u65F6\u4F1A\u8BBE\u7F6E label \u7684 for \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td><code>van-search-n-input</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td><code>#f2f2f2</code></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>clear-icon</td>\n<td>\u6E05\u9664\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>clear-trigger</td>\n<td>\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C<code>always</code> \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C<br><code>focus</code> \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A</td>\n<td><em>string</em></td>\n<td><code>focus</code></td>\n</tr>\n<tr>\n<td>autofocus</td>\n<td>\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-action</td>\n<td>\u662F\u5426\u5728\u641C\u7D22\u6846\u53F3\u4FA7\u663E\u793A\u53D6\u6D88\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>action-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u53D6\u6D88</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u8F93\u5165\u6846</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>\u662F\u5426\u5C06\u8F93\u5165\u6846\u8BBE\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u8F93\u5165\u5185\u5BB9</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error</td>\n<td>\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error-message</td>\n<td>\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570</td>\n<td><em>(val: string) =&gt; string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>format-trigger</td>\n<td>\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A <code>onBlur</code></td>\n<td><em>string</em></td>\n<td><code>onChange</code></td>\n</tr>\n<tr>\n<td>input-align</td>\n<td>\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td>\n<td><em>string</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>\u8F93\u5165\u6846\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>search</code></td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u8F93\u5165\u6846\u53F3\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>autocomplete</td>\n<td>input \u6807\u7B7E\u539F\u751F\u7684<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">\u81EA\u52A8\u5B8C\u6210\u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>search</td>\n<td>\u786E\u5B9A\u641C\u7D22\u65F6\u89E6\u53D1</td>\n<td><em>value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)</em></td>\n</tr>\n<tr>\n<td>update:model-value</td>\n<td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td>\n<td><em>value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)</em></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>blur</td>\n<td>\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>click-input</td>\n<td>\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-left-icon</td>\n<td>\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-right-icon <code>3.4.0</code></td>\n<td>\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>clear</td>\n<td>\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u540E\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Search \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>focus</td>\n<td>\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchProps</span>, <span class="hljs-title class_">SearchShape</span>, <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>SearchInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> searchRef = ref&lt;<span class="hljs-title class_">SearchInstance</span>&gt;();\n\nsearchRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>left</td>\n<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF08\u641C\u7D22\u6846\u5916\uFF09</td>\n</tr>\n<tr>\n<td>action</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\uFF08\u641C\u7D22\u6846\u5916\uFF09\uFF0C\u8BBE\u7F6E <code>show-action</code> \u5C5E\u6027\u540E\u5C55\u793A</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6587\u672C\uFF08\u641C\u7D22\u6846\u5185\uFF09</td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u56FE\u6807\uFF08\u641C\u7D22\u6846\u5185\uFF09</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807\uFF08\u641C\u7D22\u6846\u5185\uFF09</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-search-padding</td>\n<td><em>10px var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-content-background</td>\n<td><em>var(--van-gray-1)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-input-height</td>\n<td><em>34px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-padding</td>\n<td><em>0 5px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-left-icon-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-dian-ji-qing-chu-an-niu-wu-xiao" tabindex="-1">\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F</h3>\n<p>\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p>\n</div>'},null,8,d))}}}]);