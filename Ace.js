/*
 * To try in Ace editor, copy and paste into the mode creator
 * here : http://ace.c9.io/tool/mode_creator.html
 */

define(function(require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  /* --------------------- START ----------------------------- */
  var LysHighlightRules = function() {
    this.$rules = {
      start: [
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: ["storage.type.function.lys", "text", "entity.name.function", "punctuation"],
          regex:
            "\\b(fun)(\\s+)(\\w+|\\|\\||&&|&|\\||\\+\\+|\\-\\-|\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|\\[\\])(?:\\s*(\\()?)",
          push: "main__1"
        },
        {
          token: ["storage.type.var", "text", "variable.other.constant"],
          regex: "\\b(val|var)(\\s+)([A-Z][A-Z0-9_]*)",
          push: "main__2"
        },
        {
          token: ["storage.type.var", "text", "entity.name.variable"],
          regex: "\\b(val|var)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)",
          push: "main__3"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(impl)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(type)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(enum)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s+(\\{)?)",
          push: "main__4"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%wasm)(\\s*)(\\{)",
          push: "main__6"
        },
        {
          token: "storage.type.type.lys",
          regex: "(%injected)\\b"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%stack)(\\s*)(\\{)",
          push: "main__7"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(struct)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s*(\\()?)",
          push: "main__8"
        },
        {
          token: "keyword",
          regex: "\\b(if|match|case|fun|else|loop|continue|break)\\b"
        },
        {
          token: "storage.modifier",
          regex: "(?:%inline|%struct|\\b(private))\\b"
        },
        {
          token: "entity.name.type.module",
          regex: "((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: "punctuation",
          regex: "(\\->)"
        },
        {
          token: ["punctuation.accessor", "variable.other.constant"],
          regex: "(\\.\\^)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation.accessor",
          regex: "(\\.\\^|\\.)"
        },
        {
          token: "keyword.operator",
          regex: "(?:(\\|\\||&&|&|\\||\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|!)+)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "variable.other.constant",
          regex: "\\b([A-Z][A-Z0-9_]*)\\b"
        },
        {
          token: ["entity.name.function", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\()",
          push: "main__9"
        },
        {
          token: "variable.other.object",
          regex: "\\b([A-Z][A-Za-z0-9$_]*)\\b"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "punctuation",
          regex: "(\\{)",
          push: "main__10"
        },
        {
          token: "punctuation",
          regex: "(\\[)",
          push: "main__11"
        },
        {
          token: "punctuation",
          regex: "(\\()",
          push: "main__12"
        },
        {
          token: "punctuation",
          regex: "(#(!)?\\[)",
          push: "decorators__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      decorators__1: [
        {
          token: "punctuation",
          regex: "(\\])",
          next: "pop"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: "entity.other.attribute-name",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          defaultToken: "text"
        }
      ],
      literals__1: [
        {
          token: "string",
          regex: '([^\\\\]\\")',
          next: "pop"
        },
        {
          defaultToken: "string"
        }
      ],
      main__1: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "variable.parameter.function",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          defaultToken: "text"
        }
      ],
      main__10: [
        {
          token: "punctuation",
          regex: "(\\})",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: ["storage.type.function.lys", "text", "entity.name.function", "punctuation"],
          regex:
            "\\b(fun)(\\s+)(\\w+|\\|\\||&&|&|\\||\\+\\+|\\-\\-|\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|\\[\\])(?:\\s*(\\()?)",
          push: "main__1"
        },
        {
          token: ["storage.type.var", "text", "variable.other.constant"],
          regex: "\\b(val|var)(\\s+)([A-Z][A-Z0-9_]*)",
          push: "main__2"
        },
        {
          token: ["storage.type.var", "text", "entity.name.variable"],
          regex: "\\b(val|var)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)",
          push: "main__3"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(impl)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(type)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(enum)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s+(\\{)?)",
          push: "main__4"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%wasm)(\\s*)(\\{)",
          push: "main__6"
        },
        {
          token: "storage.type.type.lys",
          regex: "(%injected)\\b"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%stack)(\\s*)(\\{)",
          push: "main__7"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(struct)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s*(\\()?)",
          push: "main__8"
        },
        {
          token: "keyword",
          regex: "\\b(if|match|case|fun|else|loop|continue|break)\\b"
        },
        {
          token: "storage.modifier",
          regex: "(?:%inline|%struct|\\b(private))\\b"
        },
        {
          token: "entity.name.type.module",
          regex: "((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: "punctuation",
          regex: "(\\->)"
        },
        {
          token: ["punctuation.accessor", "variable.other.constant"],
          regex: "(\\.\\^)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation.accessor",
          regex: "(\\.\\^|\\.)"
        },
        {
          token: "keyword.operator",
          regex: "(?:(\\|\\||&&|&|\\||\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|!)+)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "variable.other.constant",
          regex: "\\b([A-Z][A-Z0-9_]*)\\b"
        },
        {
          token: ["entity.name.function", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\()",
          push: "main__9"
        },
        {
          token: "variable.other.object",
          regex: "\\b([A-Z][A-Za-z0-9$_]*)\\b"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "punctuation",
          regex: "(\\{)",
          push: "main__10"
        },
        {
          token: "punctuation",
          regex: "(\\[)",
          push: "main__11"
        },
        {
          token: "punctuation",
          regex: "(\\()",
          push: "main__12"
        },
        {
          token: "punctuation",
          regex: "(#(!)?\\[)",
          push: "decorators__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      main__11: [
        {
          token: "punctuation",
          regex: "(\\])",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: ["storage.type.function.lys", "text", "entity.name.function", "punctuation"],
          regex:
            "\\b(fun)(\\s+)(\\w+|\\|\\||&&|&|\\||\\+\\+|\\-\\-|\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|\\[\\])(?:\\s*(\\()?)",
          push: "main__1"
        },
        {
          token: ["storage.type.var", "text", "variable.other.constant"],
          regex: "\\b(val|var)(\\s+)([A-Z][A-Z0-9_]*)",
          push: "main__2"
        },
        {
          token: ["storage.type.var", "text", "entity.name.variable"],
          regex: "\\b(val|var)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)",
          push: "main__3"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(impl)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(type)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(enum)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s+(\\{)?)",
          push: "main__4"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%wasm)(\\s*)(\\{)",
          push: "main__6"
        },
        {
          token: "storage.type.type.lys",
          regex: "(%injected)\\b"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%stack)(\\s*)(\\{)",
          push: "main__7"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(struct)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s*(\\()?)",
          push: "main__8"
        },
        {
          token: "keyword",
          regex: "\\b(if|match|case|fun|else|loop|continue|break)\\b"
        },
        {
          token: "storage.modifier",
          regex: "(?:%inline|%struct|\\b(private))\\b"
        },
        {
          token: "entity.name.type.module",
          regex: "((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: "punctuation",
          regex: "(\\->)"
        },
        {
          token: ["punctuation.accessor", "variable.other.constant"],
          regex: "(\\.\\^)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation.accessor",
          regex: "(\\.\\^|\\.)"
        },
        {
          token: "keyword.operator",
          regex: "(?:(\\|\\||&&|&|\\||\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|!)+)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "variable.other.constant",
          regex: "\\b([A-Z][A-Z0-9_]*)\\b"
        },
        {
          token: ["entity.name.function", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\()",
          push: "main__9"
        },
        {
          token: "variable.other.object",
          regex: "\\b([A-Z][A-Za-z0-9$_]*)\\b"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "punctuation",
          regex: "(\\{)",
          push: "main__10"
        },
        {
          token: "punctuation",
          regex: "(\\[)",
          push: "main__11"
        },
        {
          token: "punctuation",
          regex: "(\\()",
          push: "main__12"
        },
        {
          token: "punctuation",
          regex: "(#(!)?\\[)",
          push: "decorators__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      main__12: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: ["storage.type.function.lys", "text", "entity.name.function", "punctuation"],
          regex:
            "\\b(fun)(\\s+)(\\w+|\\|\\||&&|&|\\||\\+\\+|\\-\\-|\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|\\[\\])(?:\\s*(\\()?)",
          push: "main__1"
        },
        {
          token: ["storage.type.var", "text", "variable.other.constant"],
          regex: "\\b(val|var)(\\s+)([A-Z][A-Z0-9_]*)",
          push: "main__2"
        },
        {
          token: ["storage.type.var", "text", "entity.name.variable"],
          regex: "\\b(val|var)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)",
          push: "main__3"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(impl)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(type)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(enum)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s+(\\{)?)",
          push: "main__4"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%wasm)(\\s*)(\\{)",
          push: "main__6"
        },
        {
          token: "storage.type.type.lys",
          regex: "(%injected)\\b"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%stack)(\\s*)(\\{)",
          push: "main__7"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(struct)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s*(\\()?)",
          push: "main__8"
        },
        {
          token: "keyword",
          regex: "\\b(if|match|case|fun|else|loop|continue|break)\\b"
        },
        {
          token: "storage.modifier",
          regex: "(?:%inline|%struct|\\b(private))\\b"
        },
        {
          token: "entity.name.type.module",
          regex: "((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: "punctuation",
          regex: "(\\->)"
        },
        {
          token: ["punctuation.accessor", "variable.other.constant"],
          regex: "(\\.\\^)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation.accessor",
          regex: "(\\.\\^|\\.)"
        },
        {
          token: "keyword.operator",
          regex: "(?:(\\|\\||&&|&|\\||\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|!)+)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "variable.other.constant",
          regex: "\\b([A-Z][A-Z0-9_]*)\\b"
        },
        {
          token: ["entity.name.function", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\()",
          push: "main__9"
        },
        {
          token: "variable.other.object",
          regex: "\\b([A-Z][A-Za-z0-9$_]*)\\b"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "punctuation",
          regex: "(\\{)",
          push: "main__10"
        },
        {
          token: "punctuation",
          regex: "(\\[)",
          push: "main__11"
        },
        {
          token: "punctuation",
          regex: "(\\()",
          push: "main__12"
        },
        {
          token: "punctuation",
          regex: "(#(!)?\\[)",
          push: "decorators__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      main__2: [
        {
          token: "punctuation",
          regex: "(\\=)",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      main__3: [
        {
          token: "punctuation",
          regex: "(\\=)",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      main__4: [
        {
          token: "punctuation",
          regex: "(\\})",
          next: "pop"
        },
        {
          token: ["entity.name.class", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\s*\\()",
          push: "main__5"
        },
        {
          token: "entity.name.class",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          defaultToken: "text"
        }
      ],
      main__5: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "variable.parameter.function",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          defaultToken: "text"
        }
      ],
      main__6: [
        {
          token: "punctuation",
          regex: "(\\})",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "support.type",
          regex: "\\b(i32|i64|f32|f64)\\b"
        },
        {
          token: ["entity.name.type.module", "entity.name.type.module", "variable.other.readwrite.ts"],
          regex: "(\\$)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "(\\$)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "string",
          regex: "(([\\w\\./]+)\\b)"
        },
        {
          token: ["punctuation", "storage.modifier"],
          regex: "(\\()(?:([\\w\\./$]+)?\\b)",
          push: "wasm__1"
        },
        {
          defaultToken: "text"
        }
      ],
      main__7: [
        {
          token: "punctuation",
          regex: "(\\})",
          next: "pop"
        },
        {
          token: "variable.other.constant",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          defaultToken: "text"
        }
      ],
      main__8: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "variable.parameter.function",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          defaultToken: "text"
        }
      ],
      main__9: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "string",
          regex: '(\\"\\")'
        },
        {
          token: "string",
          regex: '(\\")',
          push: "literals__1"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "constant.language",
          regex: "(\\b(true|false)\\b)"
        },
        {
          token: ["storage.type.function.lys", "text", "entity.name.function", "punctuation"],
          regex:
            "\\b(fun)(\\s+)(\\w+|\\|\\||&&|&|\\||\\+\\+|\\-\\-|\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|\\[\\])(?:\\s*(\\()?)",
          push: "main__1"
        },
        {
          token: ["storage.type.var", "text", "variable.other.constant"],
          regex: "\\b(val|var)(\\s+)([A-Z][A-Z0-9_]*)",
          push: "main__2"
        },
        {
          token: ["storage.type.var", "text", "entity.name.variable"],
          regex: "\\b(val|var)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)",
          push: "main__3"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: ["storage.type.var", "text", "entity.name.type.module"],
          regex: "\\b(import)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(impl)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class"],
          regex: "\\b(type)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(enum)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s+(\\{)?)",
          push: "main__4"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%wasm)(\\s*)(\\{)",
          push: "main__6"
        },
        {
          token: "storage.type.type.lys",
          regex: "(%injected)\\b"
        },
        {
          token: ["storage.modifier", "text", "punctuation"],
          regex: "(%stack)(\\s*)(\\{)",
          push: "main__7"
        },
        {
          token: ["storage.type.type.lys", "text", "entity.name.class", "punctuation"],
          regex: "\\b(struct)(\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(?:\\s*(\\()?)",
          push: "main__8"
        },
        {
          token: "keyword",
          regex: "\\b(if|match|case|fun|else|loop|continue|break)\\b"
        },
        {
          token: "storage.modifier",
          regex: "(?:%inline|%struct|\\b(private))\\b"
        },
        {
          token: "entity.name.type.module",
          regex: "((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)"
        },
        {
          token: "punctuation",
          regex: "(\\->)"
        },
        {
          token: ["punctuation.accessor", "variable.other.constant"],
          regex: "(\\.\\^)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation.accessor",
          regex: "(\\.\\^|\\.)"
        },
        {
          token: "keyword.operator",
          regex: "(?:(\\|\\||&&|&|\\||\\+|\\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|/|\\*|\\*\\*|%|~|\\^|!)+)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          token: "variable.other.constant",
          regex: "\\b([A-Z][A-Z0-9_]*)\\b"
        },
        {
          token: ["entity.name.function", "punctuation"],
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)(\\()",
          push: "main__9"
        },
        {
          token: "variable.other.object",
          regex: "\\b([A-Z][A-Za-z0-9$_]*)\\b"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "(=)"
        },
        {
          token: "punctuation",
          regex: "(\\{)",
          push: "main__10"
        },
        {
          token: "punctuation",
          regex: "(\\[)",
          push: "main__11"
        },
        {
          token: "punctuation",
          regex: "(\\()",
          push: "main__12"
        },
        {
          token: "punctuation",
          regex: "(#(!)?\\[)",
          push: "decorators__1"
        },
        {
          token: "invalid",
          regex: "([^\\s])"
        },
        {
          defaultToken: "text"
        }
      ],
      multi_line_comment__1: [
        {
          token: "comment.block.documentation",
          regex: "(\\*/)",
          next: "pop"
        },
        {
          defaultToken: "comment.block.documentation"
        }
      ],
      types__1: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "punctuation",
          regex: "(,)"
        },
        {
          token: "support.type",
          regex: "([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["punctuation", "support.type"],
          regex: "([:|&]\\s*)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: ["keyword", "support.type"],
          regex: "(\\b(?:is|as)\\s+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "punctuation",
          regex: "([:|&]\\s*\\()",
          push: "types__1"
        },
        {
          defaultToken: "text"
        }
      ],
      wasm__1: [
        {
          token: "punctuation",
          regex: "(\\))",
          next: "pop"
        },
        {
          token: "comment.block.documentation",
          regex: "(/\\*)",
          push: "multi_line_comment__1"
        },
        {
          token: "comment",
          regex: "(//.*)"
        },
        {
          token: "constant.numeric",
          regex: "(-)?(\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFf])?\\b)"
        },
        {
          token: "support.type",
          regex: "\\b(i32|i64|f32|f64)\\b"
        },
        {
          token: ["entity.name.type.module", "entity.name.type.module", "variable.other.readwrite.ts"],
          regex: "(\\$)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "variable.other.readwrite.ts",
          regex: "(\\$)([A-Za-z$_][A-Za-z0-9$_]*|\\?\\?\\?)"
        },
        {
          token: "string",
          regex: "(([\\w\\./]+)\\b)"
        },
        {
          token: ["punctuation", "storage.modifier"],
          regex: "(\\()(?:([\\w\\./$]+)?\\b)",
          push: "wasm__1"
        },
        {
          defaultToken: "text"
        }
      ]
    };
    this.normalizeRules();
  };
  /* ------------------------ END ------------------------------ */
  oop.inherits(LysHighlightRules, TextHighlightRules);
  exports.LysHighlightRules = LysHighlightRules;
});
