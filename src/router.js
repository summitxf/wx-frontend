export default function (router) {
  router.map({
    '*': {
      component(resolve) {
        require(['./views/Welcome'], resolve)
      }
    },
    '/': {
      component(resolve) {
        require(['./views/Welcome'], resolve)
      }
    },
    '/home/:nickname': {
      name: 'home',
      component(resolve) {
        require(['./views/Home'], resolve)
      }
    },
    '/list': {
      component(resolve) {
        require(['./views/List'], resolve)
      }
    },
    '/user': {
      component(resolve) {
        require(['./views/User'], resolve)
      }
    },
    // '/user/tasks': {
    //   component (resolve) {
    //     require(['./views/user/tasks'], resolve)
    //   }
    // },
    // '/user/withdraw': {
    //   component (resolve) {
    //     require(['./views/user/withdraw'], resolve)
    //   }
    // },
    // '/user/profile': {
    //   component (resolve) {
    //     require(['./views/user/profile'], resolve)
    //   }
    // },
    // '/user/profit': {
    //   component (resolve) {
    //     require(['./views/user/profit'], resolve)
    //   }
    // },
    // '/user/profit/record': {
    //   component (resolve) {
    //     require(['./views/user/profitRecord'], resolve)
    //   }
    // },
    // '/more': {
    //   component (resolve) {
    //     require(['./views/more'], resolve)
    //   }
    // },
    // '/more/feedback': {
    //   component (resolve) {
    //     require(['./views/more/feedback'], resolve)
    //   }
    // },
    // '/more/about': {
    //   component (resolve) {
    //     require(['./views/more/about'], resolve)
    //   }
    // }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log(`to: ${toPath} from: ${fromPath}`)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
      router.app.isIndex = depath ? 0 : 1
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
  })
}
