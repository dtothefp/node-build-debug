```
npm install -g build-debug
```

Optional: place `debugger` statement in your build code

```
$ build-debug {grunt,gulp} task_name
```

visit http://127.0.0.1:8080/debug?port=5858, initial breakpoint is set.  Either set additional breakpoints or us debugger statments.