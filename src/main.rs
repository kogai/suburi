extern crate rand;

use std::thread;
use std::time::Duration;
use std::sync::mpsc::channel;

fn main() {
    let (sender, reciever) = channel();

    for i in 0..10 {
        let sender = sender.clone();
        thread::spawn(move || {
            let n = rand::random::<u8>();
            thread::sleep(Duration::from_millis(n as u64));
            sender.send((i, n)).unwrap();
        });
    }

    for r in reciever.into_iter() {
        println!("thread number[{}] -> wait {} ms", r.0, r.1);
    }
}