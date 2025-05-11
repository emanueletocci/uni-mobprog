import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.adb_sharp),  // imposto un'icona nella parte sinistra della barra
        title: Text(widget.title),
        centerTitle: true,
        actions: [
          // const consente di migliorare le performance inquanto non rieffettua ogni volta il rendering dell'icona
          IconButton(onPressed: () => print("ciao"), icon: const Icon(Icons.search))
        ],
        foregroundColor: Colors.white,
        // accedo allo stile definito globalmente ed imposto il colore onPrimaryContainer come background
        backgroundColor: Theme.of(context).colorScheme.onPrimaryContainer,
        systemOverlayStyle: SystemUiOverlayStyle.light, // cambio il colore delle icone sulla barra di stato (notifche)
        elevation: 30,
        shadowColor: Colors.pinkAccent,
        toolbarHeight: 100,
        toolbarOpacity: 0.7,

      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.lightBlue,
                backgroundColor: Colors.black87,
                fontWeight: FontWeight.bold,
                fontSize: 18,
                letterSpacing: 10,
                wordSpacing: 2,
                fontFamily: "Sansation",
                // shadows prende in input una lista di shadow
                shadows: [
                  Shadow(
                    offset: Offset(10,10),
                    blurRadius: 3.0,
                    color: Colors.red
                  )
                ]
              ),
            ),
            TextButton(onPressed: (){}, child: const Text("TextButton")), // pulsante testuale
            TextButton.icon(
                onPressed: (){},
                icon: const Icon(Icons.adb_sharp),
                label: const Text("TextButton + Icon")
            ), // pulsante testuale con icona

            ElevatedButton(onPressed: (){}, child: const Text("ElevatedButton")), // pulsante con background (elevato)
            ElevatedButton.icon(
              onPressed: (){},
              icon: const Icon(Icons.adb_sharp),
              label: const Text("ElevatedButton + icon"),
              style: ButtonStyle(
                foregroundColor: WidgetStateProperty.all(Colors.green),
              ),
            ),
            OutlinedButton(onPressed: (){}, child: const Text("OutlinedButton")), // pulsante con bordo
            OutlinedButton.icon(
                onPressed: (){},
                icon: const Icon(Icons.adb_sharp),
                label: const Text("OutlinedButton + icon")
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
