(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{708:function(e,t,n){"use strict";n.r(t);var a=n(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"debugging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),n("h2",{attrs:{id:"tendermint-debug-kill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-debug-kill"}},[e._v("#")]),e._v(" Tendermint debug kill")]),e._v(" "),n("p",[e._v("Tendermint comes with a "),n("code",[e._v("debug")]),e._v(" sub-command that allows you to kill a live\nTendermint process while collecting useful information in a compressed archive.\nThe information includes the configuration used, consensus state, network\nstate, the node' status, the WAL, and even the stack trace of the process\nbefore exit. These files can be useful to examine when debugging a faulty\nTendermint process.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBkZWJ1ZyBraWxsICZsdDtwaWQmZ3Q7ICZsdDsvcGF0aC90by9vdXQuemlwJmd0OyAtLWhvbWU9Jmx0Oy9wYXRoL3RvL2FwcC5kJmd0Owo="}}),e._v(" "),n("p",[e._v("will write debug info into a compressed archive. The archive will contain the\nfollowing:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"4pSc4pSA4pSAIGNvbmZpZy50b21sCuKUnOKUgOKUgCBjb25zZW5zdXNfc3RhdGUuanNvbgrilJzilIDilIAgbmV0X2luZm8uanNvbgrilJzilIDilIAgc3RhY2t0cmFjZS5vdXQK4pSc4pSA4pSAIHN0YXR1cy5qc29uCuKUlOKUgOKUgCB3YWwK"}}),e._v(" "),n("p",[e._v("Under the hood, "),n("code",[e._v("debug kill")]),e._v(" fetches info from "),n("code",[e._v("/status")]),e._v(", "),n("code",[e._v("/net_info")]),e._v(", and\n"),n("code",[e._v("/dump_consensus_state")]),e._v(" HTTP endpoints, and kills the process with "),n("code",[e._v("-6")]),e._v(", which\ncatches the go-routine dump.")]),e._v(" "),n("h2",{attrs:{id:"tendermint-debug-dump"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-debug-dump"}},[e._v("#")]),e._v(" Tendermint debug dump")]),e._v(" "),n("p",[e._v("Also, the "),n("code",[e._v("debug dump")]),e._v(" sub-command allows you to dump debugging data into\ncompressed archives at a regular interval. These archives contain the goroutine\nand heap profiles in addition to the consensus state, network info, node\nstatus, and even the WAL.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBkZWJ1ZyBkdW1wICZsdDsvcGF0aC90by9vdXQmZ3Q7IC0taG9tZT0mbHQ7L3BhdGgvdG8vYXBwLmQmZ3Q7Cg=="}}),e._v(" "),n("p",[e._v("will perform similarly to "),n("code",[e._v("kill")]),e._v(" except it only polls the node and\ndumps debugging data every frequency seconds to a compressed archive under a\ngiven destination directory. Each archive will contain:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"4pSc4pSA4pSAIGNvbnNlbnN1c19zdGF0ZS5qc29uCuKUnOKUgOKUgCBnb3JvdXRpbmUub3V0CuKUnOKUgOKUgCBoZWFwLm91dArilJzilIDilIAgbmV0X2luZm8uanNvbgrilJzilIDilIAgc3RhdHVzLmpzb24K4pSU4pSA4pSAIHdhbAo="}}),e._v(" "),n("p",[e._v("Note: goroutine.out and heap.out will only be written if a profile address is\nprovided and is operational. This command is blocking and will log any error.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);