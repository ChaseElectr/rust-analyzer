initSidebarItems({"constant":[["CURSOR_MARKER",""]],"enum":[["FixtureMeta",""],["RangeOrOffset",""]],"fn":[["add_cursor","Inserts `<|>` marker into the `text` at `offset`."],["collect_rust_files","Collects all `.rs` files from `dir` subdirectories defined by `paths`."],["dir_tests","Calls callback `f` with input code and file paths for each `.rs` file in `test_data_dir` subdirectories defined by `paths`."],["extract_offset","Infallible version of `try_extract_offset()`."],["extract_range","Infallible version of `try_extract_range()`."],["extract_range_or_offset","Extracts `TextRange` or `TextSize` depending on the amount of `<|>` markers found in `text`."],["extract_ranges","Extracts ranges, marked with `<tag> </tag>` pairs from the `text`"],["find_mismatch","Compares JSON object for approximate equality. You can use `[..]` wildcard in strings (useful for OS dependent things such as paths). You can use a `\"{...}\"` string literal as a wildcard for arbitrary nested JSON. Arrays are sorted before comparison."],["lines_match","Compare a line with an expected pattern. - Use `[..]` as a wildcard to match 0 or more characters on the same line   (similar to `.*` in a regex)."],["parse_fixture","Parses text which looks like this:"],["parse_single_fixture","Same as `parse_fixture`, except it allow empty fixture"],["project_dir","Returns the path to the root directory of `rust-analyzer` project."],["read_text","Read file and normalize newlines."],["skip_slow_tests","Returns `false` if slow tests should not run, otherwise returns `true` and also creates a file at `./target/.slow_tests_cookie` which serves as a flag that slow tests did run."]],"macro":[["_check",""],["_hit",""],["assert_eq_text","Asserts that two strings are equal, otherwise displays a rich diff between them."]],"mod":[["mark","This module implements manually tracked test coverage, which is useful for quickly finding a test responsible for testing a particular bit of code."]],"struct":[["CfgOptions","Configuration options used for conditional compilition on items with `cfg` attributes. We have two kind of options in different namespaces: atomic options like `unix`, and key-value options like `target_arch=\"x86\"`."],["FileMeta",""],["FixtureEntry",""],["RelativePath","A borrowed, immutable relative path."],["RelativePathBuf","An owned, mutable relative path."],["__Changeset","The information about a full changeset"]],"type":[["FxHashMap","Type alias for a hashmap using the `fx` hash algorithm."]]});