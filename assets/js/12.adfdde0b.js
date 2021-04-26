(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{495:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("由於暫時不打算在 CI 工具上付費，基本上免費額度已經夠用，只是如果每 push 一次，就會跑一次 CI，好處是能當下看到是否有測試未通過，不過礙於測試一次跑完要耗費 150 credits 以上，免費額度大概 2 天就沒了，但對我們而言 Draft PR 是還在開發中，所以只要最終整合、驗收時測試有跑過就好。")]),t._v(" "),a("h2",{attrs:{id:"實現方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#實現方式"}},[t._v("#")]),t._v(" 實現方式")]),t._v(" "),a("p",[t._v("我們使用 Circle CI 本身並沒有直接支援 pattern 或設定的方式，可以直接跳過 GitHub Draft PR 不跑測試，所以找了一些解決方案，最終找到 "),a("a",{attrs:{href:"https://circleci.com/developer/orbs/orb/artsy/skip-wip-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("artsy/skip-wip-ci"),a("OutboundLink")],1),t._v(" orb，不過有一些缺點就是要餵 "),a("code",[t._v("CIRCLE_PROJECT_USERNAME")]),t._v("、"),a("code",[t._v("CIRCLE_PR_REPONAME")]),t._v("、"),a("code",[t._v("CIRCLE_PR_NUMBER")]),t._v("、"),a("code",[t._v("CIRCLE_BUILD_NUM")]),t._v(" 這些環境變數，有點麻煩，但其實這些環境變數已經是 "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/env-vars/#built-in-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Built-in environment variables"),a("OutboundLink")],1),t._v("，所以理應可以只設定 "),a("code",[t._v("GITHUB_TOKEN")]),t._v("、"),a("code",[t._v("CIRCLE_TOKEN")]),t._v(" 就可以跑這個 orb。")]),t._v(" "),a("p",[t._v("照著上面的想法，剛好那個 orb 是 MIT LICENSE 可以直接 fork 來改，於是大部分都是基於 "),a("a",{attrs:{href:"https://circleci.com/developer/orbs/orb/artsy/skip-wip-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("artsy/skip-wip-ci"),a("OutboundLink")],1),t._v(" orb 的實作，稍微做了一些修正，流程如下：")]),t._v(" "),a("ol",[a("li",[t._v("透過 Circle CI Built-in 環境變數，拿到 "),a("code",[t._v("CIRCLE_PROJECT_USERNAME")]),t._v("、"),a("code",[t._v("CIRCLE_PROJECT_REPONAME")]),t._v("、以及 PR Number")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/pulls/${CIRCLE_PULL_REQUEST##*/}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("接著去打 API 檢查 PR 狀態是不是 Draft")]),t._v(" "),a("li",[t._v("如果是 Draft，則去打 Circle CI API 取消整個 Workflow")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST https://circleci.com/api/v2/workflow/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CIRCLE_WORKFLOW_ID}")]),t._v("/cancel -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept: application/json'")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CIRCLE_TOKEN}")]),t._v(':"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"bye-github-draft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bye-github-draft"}},[t._v("#")]),t._v(" bye-github-draft")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/whyayen/bye-github-draft",target:"_blank",rel:"noopener noreferrer"}},[t._v("bye-github-draft"),a("OutboundLink")],1),t._v(" 是基於 "),a("a",{attrs:{href:"https://circleci.com/developer/orbs/orb/artsy/skip-wip-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("artsy/skip-wip-ci"),a("OutboundLink")],1),t._v(" fork 出來修改的版本，使用前必須先：")]),t._v(" "),a("ol",[a("li",[t._v("確保 Organization Settings 有開啟 "),a("strong",[t._v("Allow Uncertified Orbs")]),t._v(" 設定")]),t._v(" "),a("li",[t._v("去 User settings 建立 "),a("strong",[t._v("Personal API Tokens")]),t._v("（"),a("strong",[t._v("Circle CI API v2 不支援 Project Token")]),t._v("）")]),t._v(" "),a("li",[t._v("到 Circle CI Project Settings 新增環境變數，名稱："),a("code",[t._v("CIRCLE_TOKEN")]),t._v("，值為剛剛建立的 Personal API Token")]),t._v(" "),a("li",[t._v("到 GitHub 建立 Personal Access Token，需包含 "),a("code",[t._v("repo")]),t._v(" 權限")]),t._v(" "),a("li",[t._v("到 Circle CI Project Settings 新增環境變數，名稱："),a("code",[t._v("GITHUB_TOKEN")]),t._v("，值為剛剛戀的 GitHub Personal Access Token")]),t._v(" "),a("li",[t._v("修改你的 "),a("code",[t._v("config.yml")])])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一定要是 2.1 版，2.0 過不了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("orbs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bye-github-draft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" whyayen/bye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("draft@0.0.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的 jobs/workflows/commands")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("your_workflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("draft/check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("skippable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pr\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 確保你的 job 跑在 check-skippable-pr 之後")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("your_job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requires")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("draft/check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("skippable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pr\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"總結"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#總結"}},[t._v("#")]),t._v(" 總結")]),t._v(" "),a("p",[t._v("照著上述使用 orb 的步驟，應該是蠻輕鬆簡單可以做到 Circle CI skip GitHub Draft PR，不過缺點是當你把 Draft PR 轉為一般 PR 後，沒有 push 任何 commit，就等於整個 PR 都沒跑過測試，其實蠻容易讓程式碼變髒、測試沒有維護等問題出現，其次是它仍然會消耗約 2 ~ 3 credits，不過如果暫時沒有經費花費在 CI 上，也許這也是一種做法，但是團隊內應該要討論 Merge 之前，要如何確保程式通過測試、跑測試的機制。")])])}),[],!1,null,null,null);s.default=r.exports}}]);