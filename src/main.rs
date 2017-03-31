use std::thread;
use std::time::Duration;
use std::sync::{Arc, Mutex};

fn main() {
    let xs = Arc::new(Mutex::new(vec![1, 2, 3]));

    for i in 0..3 {
        let xs_ref = xs.clone();
        thread::spawn(move || {
            let mut x = xs_ref.lock().unwrap();
            x[0] += i;
        });
    }

    println!("{:?}", xs);
    thread::sleep(Duration::from_millis(50));
}