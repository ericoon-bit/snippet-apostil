use wasm_bindgen::prelude::*;

// 字母转换成ASCII码
fn str_to_bin(s: &str) -> String {
    let mut result = String::new();
    for c in s.chars() {
        result.push_str(&format!("{} ", c as u8));
    }
    result
}

#[wasm_bindgen]
// 将二进制加密
pub fn encrypt(s: &str) -> String {
    str_to_bin(s)
}