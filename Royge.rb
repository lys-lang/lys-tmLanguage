# -*- coding: utf-8 -*- #

module Rouge
  module Lexers
    class Lys < RegexLexer
      title     "lys"
      tag       'Lys'
      mimetypes 'text/x-lys'
      filenames '*.lys'

      state:root do
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /\b(fun)(\s+)(\w+|\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Function, Punctuation
            push :main__1
          end
          rule /\b(val|var)(\s+)([A-Z][A-Z0-9_]*)/ do
            groups Keyword::Declaration, Generic, Name::Constant
          end
          rule /\b(val|var)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Variable
          end
          rule /\b(import)(\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(import)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(impl)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(type)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(enum)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s+(\{)?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__2
          end
          rule /(%wasm)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__4
          end
          rule /(%injected)\b/, Keyword::Declaration
          rule /(%stack)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__5
          end
          rule /\b(struct)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__6
          end
          rule /\b(if|match|case|fun|else|loop|continue|break)\b/, Keyword
          rule /(?:%inline|%struct|\b(private))/, Keyword
          rule /((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/, Name::Namespace
          rule /(\->)/, Punctuation
          rule /(\.\^)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Constant
          end
          rule /(\.\^|\.)/, Punctuation
          rule /(\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^|!)/, Operator
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /\b([A-Z][A-Z0-9_]*)\b/, Name::Constant
          rule /([A-Za-z$_][A-Za-z0-9$_]*)(\()/ do
            groups Name::Function, Punctuation
            push :main__7
          end
          rule /\b([A-Z][A-Za-z0-9$_]*)\b/, Name::Variable::Class
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(=)/, Punctuation
          rule /(\{)/, Punctuation, :main__8
          rule /(\()/, Punctuation, :main__9
          rule /(#\[)/, Name::Decorator, :decorators__1
          rule /([^\s\n\r]/, Generic::Error
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:decorators__1 do
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Decorator
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:literals__1 do
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__1 do
          rule /(,)/, Punctuation
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__2 do
          rule /([A-Za-z$_][A-Za-z0-9$_]*)(\s*\()/ do
            groups Name::Class, Punctuation
            push :main__3
          end
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Class
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__3 do
          rule /(,)/, Punctuation
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__4 do
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /\b(i32|i64|f32|f64)\b/, Name::Variable::Class
          rule /(\$)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Name::Namespace, Name::Namespace, Name::Variable
          end
          rule /(\$)([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(([\w\.\/]+)\b)/, String
          rule /(\()(?:([\w\.\/$]+)?\b)/ do
            groups Punctuation, Keyword
            push :wasm__1
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__5 do
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Constant
          rule /(=)/, Punctuation
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__6 do
          rule /(,)/, Punctuation
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__7 do
          rule /(,)/, Punctuation
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /\b(fun)(\s+)(\w+|\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Function, Punctuation
            push :main__1
          end
          rule /\b(val|var)(\s+)([A-Z][A-Z0-9_]*)/ do
            groups Keyword::Declaration, Generic, Name::Constant
          end
          rule /\b(val|var)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Variable
          end
          rule /\b(import)(\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(import)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(impl)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(type)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(enum)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s+(\{)?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__2
          end
          rule /(%wasm)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__4
          end
          rule /(%injected)\b/, Keyword::Declaration
          rule /(%stack)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__5
          end
          rule /\b(struct)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__6
          end
          rule /\b(if|match|case|fun|else|loop|continue|break)\b/, Keyword
          rule /(?:%inline|%struct|\b(private))/, Keyword
          rule /((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/, Name::Namespace
          rule /(\->)/, Punctuation
          rule /(\.\^)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Constant
          end
          rule /(\.\^|\.)/, Punctuation
          rule /(\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^|!)/, Operator
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /\b([A-Z][A-Z0-9_]*)\b/, Name::Constant
          rule /([A-Za-z$_][A-Za-z0-9$_]*)(\()/ do
            groups Name::Function, Punctuation
            push :main__7
          end
          rule /\b([A-Z][A-Za-z0-9$_]*)\b/, Name::Variable::Class
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(=)/, Punctuation
          rule /(\{)/, Punctuation, :main__8
          rule /(\()/, Punctuation, :main__9
          rule /(#\[)/, Name::Decorator, :decorators__1
          rule /([^\s\n\r]/, Generic::Error
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__8 do
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /\b(fun)(\s+)(\w+|\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Function, Punctuation
            push :main__1
          end
          rule /\b(val|var)(\s+)([A-Z][A-Z0-9_]*)/ do
            groups Keyword::Declaration, Generic, Name::Constant
          end
          rule /\b(val|var)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Variable
          end
          rule /\b(import)(\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(import)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(impl)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(type)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(enum)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s+(\{)?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__2
          end
          rule /(%wasm)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__4
          end
          rule /(%injected)\b/, Keyword::Declaration
          rule /(%stack)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__5
          end
          rule /\b(struct)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__6
          end
          rule /\b(if|match|case|fun|else|loop|continue|break)\b/, Keyword
          rule /(?:%inline|%struct|\b(private))/, Keyword
          rule /((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/, Name::Namespace
          rule /(\->)/, Punctuation
          rule /(\.\^)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Constant
          end
          rule /(\.\^|\.)/, Punctuation
          rule /(\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^|!)/, Operator
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /\b([A-Z][A-Z0-9_]*)\b/, Name::Constant
          rule /([A-Za-z$_][A-Za-z0-9$_]*)(\()/ do
            groups Name::Function, Punctuation
            push :main__7
          end
          rule /\b([A-Z][A-Za-z0-9$_]*)\b/, Name::Variable::Class
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(=)/, Punctuation
          rule /(\{)/, Punctuation, :main__8
          rule /(\()/, Punctuation, :main__9
          rule /(#\[)/, Name::Decorator, :decorators__1
          rule /([^\s\n\r]/, Generic::Error
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__9 do
          rule /(,)/, Punctuation
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(\"\")/, String
          rule /(\")/, String, :literals__1
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /(\b(true|false)\b)/, Keyword::Constant
          rule /\b(fun)(\s+)(\w+|\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Function, Punctuation
            push :main__1
          end
          rule /\b(val|var)(\s+)([A-Z][A-Z0-9_]*)/ do
            groups Keyword::Declaration, Generic, Name::Constant
          end
          rule /\b(val|var)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Variable
          end
          rule /\b(import)(\s+)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(import)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Namespace
          end
          rule /\b(impl)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(type)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword::Declaration, Generic, Name::Class
          end
          rule /\b(enum)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s+(\{)?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__2
          end
          rule /(%wasm)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__4
          end
          rule /(%injected)\b/, Keyword::Declaration
          rule /(%stack)(\s*)(\{)/ do
            groups Keyword, Generic, Punctuation
            push :main__5
          end
          rule /\b(struct)(\s+)([A-Za-z$_][A-Za-z0-9$_]*)(?:\s*(\()?)/ do
            groups Keyword::Declaration, Generic, Name::Class, Punctuation
            push :main__6
          end
          rule /\b(if|match|case|fun|else|loop|continue|break)\b/, Keyword
          rule /(?:%inline|%struct|\b(private))/, Keyword
          rule /((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)/, Name::Namespace
          rule /(\->)/, Punctuation
          rule /(\.\^)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Constant
          end
          rule /(\.\^|\.)/, Punctuation
          rule /(\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^|!)/, Operator
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /\b([A-Z][A-Z0-9_]*)\b/, Name::Constant
          rule /([A-Za-z$_][A-Za-z0-9$_]*)(\()/ do
            groups Name::Function, Punctuation
            push :main__7
          end
          rule /\b([A-Z][A-Za-z0-9$_]*)\b/, Name::Variable::Class
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(=)/, Punctuation
          rule /(\{)/, Punctuation, :main__8
          rule /(\()/, Punctuation, :main__9
          rule /(#\[)/, Name::Decorator, :decorators__1
          rule /([^\s\n\r]/, Generic::Error
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:multi_line_comment__1 do
          rule /(\n|\r|\r\n)/, String
          rule /./, Comment.Multiline
      end

      state:types__1 do
          rule /(,)/, Punctuation
          rule /([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable::Class
          rule /([:|&]\s*)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Punctuation, Name::Variable::Class
          end
          rule /(\b(?:is|as)\s+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Keyword, Name::Variable::Class
          end
          rule /([:|&]\s*\()/, Punctuation, :types__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:wasm__1 do
          rule /(\/\*)/, Comment::Multiline, :multi_line_comment__1
          rule /(\/\/.*)/, Comment
          rule /(-)?(\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)([LlFf])?\b)/, Number
          rule /\b(i32|i64|f32|f64)\b/, Name::Variable::Class
          rule /(\$)((?:[A-Za-z$_][A-Za-z0-9$_]*::)+)([A-Za-z$_][A-Za-z0-9$_]*)/ do
            groups Name::Namespace, Name::Namespace, Name::Variable
          end
          rule /(\$)([A-Za-z$_][A-Za-z0-9$_]*)/, Name::Variable
          rule /(([\w\.\/]+)\b)/, String
          rule /(\()(?:([\w\.\/$]+)?\b)/ do
            groups Punctuation, Keyword
            push :wasm__1
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

    end
  end
end

