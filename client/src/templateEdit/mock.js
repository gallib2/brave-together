const mock = [
    {
        id: 1,
        backgroundImg: 'images/template-1',//'images/111-02.svg',
        backgroundImageColor: '#ffffff',
        image: 'images/template-images/olive-leaf-04.png',
        imagePostion: '',
        textDefaultPosition: '',
        templateImg: `images/template1.png`
    },
    {id: 2, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/6917/a6e6/5220c88b3098075d6c9900f761142805?Expires=1617580800&Signature=BAxi2ut1sjU2r7o9IrLOnPLeffRWqOA0TFug~1SGrb4x~NEyJUaCE3Z5AJjgt0us8GJIxY0LpLt4VNW2v7Yh1ypn5xj5-vE6mVeBxV8po4Njs3m6caGjAWKko0wWBsnZ0XyomRB~AbigrsUCb8oCflTwI0bKHu64HZ9ew0RujiEydoRnn79UscSHrqjerrrLYmYddQVmEFlmtYPCv8oqlvzqqb2~mxs6Gocr9I9qWh48Tbp1~lUbLWt2ll1Dasevs8oFUOTp6u3jbXUuOR7tI1JlYm~I16HOHfLWQKV-i8yWR-LDfM5RxRvGgbLM24ncup4kDTB75rb7Fzn7NlYA6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 3, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/dd6d/4070/c2f8049d00d49160623e6a326dbcc426?Expires=1617580800&Signature=N3E0xgT9z3EL1gHfD7NCxfrhCtqBRsmP5KIUKyolpUtvKsnudD7tHYppH3dJz6GypjRPiRkTJG1M9CSsYRwjK8PrTcaF0Yzqmd9Q7zumEuxPe~RgEW7RShvZL9afgKdALQOYhTicUmgApyLKZ8GxLeyx3irbW~~5nU-XkJjvIVtjyo0xP09h8OMYKNsDYusTeMe3guNEobOkpf7ijiDZXz2REya7N~eWEFMY5TqtTgn8DY1ta46gxBs1X9CbQDjA8WuQPOwiKhBg66Iv~a7XUUYH1RcQrASREyfWHMNaUZXveq~MMsQrqatDSwX1DDHxH8~2sFCOAjEV3t1QCN5QaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 4, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/6917/a6e6/5220c88b3098075d6c9900f761142805?Expires=1617580800&Signature=BAxi2ut1sjU2r7o9IrLOnPLeffRWqOA0TFug~1SGrb4x~NEyJUaCE3Z5AJjgt0us8GJIxY0LpLt4VNW2v7Yh1ypn5xj5-vE6mVeBxV8po4Njs3m6caGjAWKko0wWBsnZ0XyomRB~AbigrsUCb8oCflTwI0bKHu64HZ9ew0RujiEydoRnn79UscSHrqjerrrLYmYddQVmEFlmtYPCv8oqlvzqqb2~mxs6Gocr9I9qWh48Tbp1~lUbLWt2ll1Dasevs8oFUOTp6u3jbXUuOR7tI1JlYm~I16HOHfLWQKV-i8yWR-LDfM5RxRvGgbLM24ncup4kDTB75rb7Fzn7NlYA6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 5, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/4db1/15bb/057e89c80fc8fe80436b8306333c87d7?Expires=1617580800&Signature=R8I61-n6QN4xNyt5kvSetT-8ZGo9jaSl9whOIjpjzhhJekw2LblrZlTZBivjmZaVG0DVxWbbMhPMxGgBe7QwJY6WA1vBXt1mzRl~Cq6gzPmzP4f11io1wseLQE08XSXs08xtVS5yfn6K1uEfcVRN0fKx88Dqj1bWzexiPxe3JlnTUOLuComYuh89CHjIUDsUDiXrRP9MjxB7COiAJpdIuHGfqwNqfEmWR1TelzWVajYxzPygNU0k7MXwgJDMCmdW-quccdtkTn5HiYqhs4PpwU7GMyice7QX1Kvc38PCmhIiDM6vNE~toXVkJAbEIuy7yUpxA0mQwqnODrIkIu2XDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 6, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/dd6d/4070/c2f8049d00d49160623e6a326dbcc426?Expires=1617580800&Signature=N3E0xgT9z3EL1gHfD7NCxfrhCtqBRsmP5KIUKyolpUtvKsnudD7tHYppH3dJz6GypjRPiRkTJG1M9CSsYRwjK8PrTcaF0Yzqmd9Q7zumEuxPe~RgEW7RShvZL9afgKdALQOYhTicUmgApyLKZ8GxLeyx3irbW~~5nU-XkJjvIVtjyo0xP09h8OMYKNsDYusTeMe3guNEobOkpf7ijiDZXz2REya7N~eWEFMY5TqtTgn8DY1ta46gxBs1X9CbQDjA8WuQPOwiKhBg66Iv~a7XUUYH1RcQrASREyfWHMNaUZXveq~MMsQrqatDSwX1DDHxH8~2sFCOAjEV3t1QCN5QaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
];

export default mock;