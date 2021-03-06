## 文档模式

#### 严格模式与混杂模式

###### 不同文档模式的由来

相信了解过浏览器或浏览器厂商发展历史的同学都知道，在浏览器的发展初期，是没有什么标准可言的，各大浏览器厂商各自实现一套解析文档的方式，这对于开发者来说就如同灾难一样，开发者需要针对不同厂商的浏览器做兼容处理。慢慢的人们开始注意到标准的重要性，并成立了规范组织制定相应的标准，各个浏览器厂商也开始向标准靠拢，但随之而来的问题就是，如果一味的向标准靠拢，那必然会导致一个问题：老旧的网站将无法正常显示。为了做到向后兼容，浏览器厂商就保留了原有的文档解析方式，也就是现在所说的 `混杂模式`，同时将向标准靠拢的解析方式称为 `标准模式`，又称 `严格模式`。

也就是说，两种模式所代表的是浏览器解析文档的方式。而至于如果开启这两种模式，可以使用 `<!DOCTYPE>` 标签。

#### 文档类型

###### <!DOCTYPE>

`<!DOCTYPE>` 用来声明文档类型，目的告诉浏览器使用哪种模式去解析文档。说白了就是告诉浏览器在解析文档的时候是采用 `混杂模式` 还是 `标准模式`。

###### 开启 混杂模式(quirks mode)

如果浏览器发现在文档开始处没有 `文档类型声明`，即没有 `<!DOCTYPE>` 标签，那么浏览器默认会使用混杂模式解析文档，当然不写 `<!DOCTYPE>` 标签是极其不推荐的方式。

###### 开启 标准模式(standards mode)

```html
<!-- HTML 4.01 严格型 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"  "http://www.w3.org/TR/html4/strict.dtd"> 

<!-- XHTML 1.0 严格型 -->
<!DOCTYPE html PUBLIC  "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
```

以上三种的任意一种都可以触发标准模式