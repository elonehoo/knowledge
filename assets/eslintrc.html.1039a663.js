import{d as n}from"./app.cd4bbdf2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u6839\u636E JavaScript \u7F16\u7801\u89C4\u8303\u7F16\u5199\u7684 eslist \u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u9700\u8981\u5B89\u88C5 eslint-plugin-vue */</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/* \u7F29\u8FDB tab */</span>
        <span class="token string-property property">&quot;indent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;SwitchCase&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u4F7F\u7528\u5355\u5F15\u53F7 */</span>
        <span class="token string-property property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;single&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u5206\u53F7\u5FC5\u987B */</span>
        <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;always&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u51FD\u6570\u4E0D\u5141\u8BB8\u6709\u91CD\u590D\u7684\u53C2\u6570 */</span>
        <span class="token string-property property">&quot;no-dupe-args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u4E0D\u5141\u8BB8\u6709\u591A\u4F59\u7684\u5206\u53F7 */</span>
        <span class="token string-property property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u4E0D\u5141\u8BB8\u6709\u591A\u4F59\u7684\u7A7A\u683C */</span>
        <span class="token string-property property">&quot;no-multi-spaces&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u7981\u6B62\u53D8\u91CF\u91CD\u590D\u58F0\u660E */</span>
        <span class="token string-property property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u7981\u6B62\u672A\u4F7F\u7528\u7684\u53D8\u91CF */</span>
        <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u9017\u53F7\u524D\u4E0D\u53EF\u4EE5\u6709\u7A7A\u683C\uFF0C\u9017\u53F7\u540E\u5FC5\u987B\u6709\u7A7A\u683C\u3002
         * \u53D8\u91CF\u58F0\u660E\uFF1A
         * \u2705var a = 1, b = 2
         * \u6570\u7EC4\uFF1A
         * \u2705[1, 2]
         * \u5BF9\u8C61\uFF1A
         * \u2705<span class="token punctuation">{</span>a: 1, b: 2<span class="token punctuation">}</span>
         * \u51FD\u6570\u53C2\u6570\uFF1A
         * \u2705function (a, b) <span class="token punctuation">{</span><span class="token punctuation">}</span> 
         * \u2705fn(1, 2)
         */</span>
        <span class="token string-property property">&quot;comma-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;before&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;after&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u7981\u6B62\u51FD\u6570\u540D\u79F0\u4E0E\u62EC\u53F7\u95F4\u7684\u95F4\u9694
         * \u274E\uFF1Afn ()
         * \u2705\uFF1Afn()
         */</span>
        <span class="token string-property property">&quot;func-call-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u5BF9\u8C61\u5B57\u9762\u91CF\u5192\u53F7\u524D\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C\uFF0C\u5192\u53F7\u540E\u5FC5\u987B\u4E14\u53EA\u6709\u4E00\u4E2A\u7A7A\u683C
         * \u2705\uFF1A<span class="token punctuation">{</span>a: 1<span class="token punctuation">}</span>
         * \u2705\uFF1A<span class="token punctuation">{</span>
         *         a: 1,
         *         b: 2
         *     <span class="token punctuation">}</span>
         */</span>
        <span class="token string-property property">&quot;key-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;beforeColon&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;afterColon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;strict&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u5173\u952E\u5B57\u524D\u540E\u5404\u81F3\u5C11\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5305\u62EC\u7684\u5173\u952E\u5B57\u67E5\u770B\uFF1A
         * http://eslint.org/docs/rules/keyword-spacing#rule-details
         */</span>
        <span class="token string-property property">&quot;keyword-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u53D8\u91CF\u58F0\u660E\u540E\u5F3A\u5236\u4E00\u4E2A\u7A7A\u884C\uFF0C\u751F\u547D\u53D8\u91CF\u5305\u62EC\u4F7F\u7528 var let const \u7B49
         */</span>
        <span class="token string-property property">&quot;newline-after-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BED\u53E5\u5757\u524D\u5FC5\u987B\u8981\u6709\u7A7A\u683C\uFF0C\u8BED\u53E5\u5757\u53EA\u5F97\u5C31\u662F\u82B1\u62EC\u53F7 {}</span>
        <span class="token string-property property">&quot;space-before-blocks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * function \u5173\u952E\u4E4B\u4E0E\u540E\u8FB9\u7B2C\u4E00\u4E2A\u5706\u62EC\u53F7\u4E4B\u95F4\u5FC5\u987B\u6709\u7A7A\u683C\u3002\u5305\u62EC\uFF1A\u533F\u540D\u51FD\u6570\u3001\u547D\u540D\u51FD\u6570\u3001async\u4FEE\u9970\u7684\u7BAD\u5934\u51FD\u6570
         * \u2705\uFF1Afunction () <span class="token punctuation">{</span><span class="token punctuation">}</span>
         * \u2705\uFF1Afunction set () <span class="token punctuation">{</span><span class="token punctuation">}</span>
         * \u2705\uFF1Aclass Foo <span class="token punctuation">{</span>
         *          constructor () <span class="token punctuation">{</span>
         *               // ...
         *          <span class="token punctuation">}</span>
         *     <span class="token punctuation">}</span>
         * \u2705\uFF1Alet foo = <span class="token punctuation">{</span>
         *         bar () <span class="token punctuation">{</span>
         *               // ...
         *         <span class="token punctuation">}</span>
         *     <span class="token punctuation">}</span>;
         * \u2705\uFF1Alet foo = async (a) =&gt; await a
         */</span>
        <span class="token string-property property">&quot;space-before-function-paren&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;anonymous&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;named&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;asyncArrow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u591A\u5143\u8FD0\u7B97\u7B26\u524D\u540E\u8981\u6709\u7A7A\u683C</span>
        <span class="token string-property property">&quot;space-infix-ops&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u4E00\u5143\u5173\u952E\u5B57\u8FD0\u7B97\u7B26(\u64CD\u4F5C\u7B26)\u540E\u5FC5\u987B\u6709\u7A7A\u683C\uFF1Anew, delete, typeof, void, yield \u7B49
         * \u4E00\u5143\u8FD0\u7B97\u7B26\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C\u5982\uFF1A-, +, --, ++, !, !! \u7B49
         * \u2705\uFF1Anew Foo();
         * \u2705\uFF1A++foo;
         * \u2705\uFF1Afoo--;
         * \u2705\uFF1A-foo;
         * \u2705\uFF1A+&quot;3&quot;;
         */</span>
        <span class="token string-property property">&quot;space-unary-ops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;words&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;nonwords&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// ================================ \u4EE5\u4E0B\u662F ES6 \u89C4\u8303 ================================</span>

        <span class="token doc-comment comment">/**
         * \u7BAD\u5934\u51FD\u6570\u4E2D\u7684\u7BAD\u5934\u524D\u540E\u5FC5\u987B\u5404\u6709\u4E00\u4E2A\u7A7A\u683C
         * \u2705\uFF1A() =&gt; 1
         */</span>
        <span class="token string-property property">&quot;arrow-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u7EE7\u627F\u65F6\u5B50\u7C7B\u7684 constructor \u65B9\u6CD5\u4E2D\u5FC5\u987B\u8C03\u7528 super \u65B9\u6CD5
         * \u2705\uFF1Aclass A extends B <span class="token punctuation">{</span>
         *         constructor() <span class="token punctuation">{</span>
         *             super();
         *         <span class="token punctuation">}</span>
         *     <span class="token punctuation">}</span>
         */</span>
        <span class="token string-property property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4E0D\u5141\u8BB8\u7ED9\u5E38\u91CF(const)\u8D4B\u503C</span>
        <span class="token string-property property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5728 constructor \u4E2D\u4E0D\u5141\u8BB8\u5728 super \u65B9\u6CD5\u88AB\u8C03\u7528\u4E4B\u524D\u8C03\u7528 this \u6216 super \u5173\u952E\u5B57</span>
        <span class="token string-property property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4E0D\u5141\u8BB8\u4F7F\u7528 var \u58F0\u660E\u53D8\u91CF\uFF0C\u4F7F\u7528 let \u6216 const \u4EE3\u66FF</span>
        <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br></div></div>`,2);function t(e,o){return p}var c=s(a,[["render",t]]);export{c as default};
