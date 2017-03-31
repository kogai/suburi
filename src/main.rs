use std::thread;

fn main() {
    let x = 1;
    let handle = thread::spawn(move || {
        format!("Hello from a thread x is {}", x)
    });
    println!("{}", handle.join().unwrap());
}