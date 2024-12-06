const fs = require('fs');

// CREATE: employees.json dosyasına veri yaz
fs.writeFile('employees.json', JSON.stringify({ name: "Employee 1 Name", salary: 2000 }), 'utf8', (err) => {
    if (err) throw err;
    console.log('Dosya oluşturuldu ve veri yazıldı.');

    // READ: employees.json dosyasını oku
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Dosya içeriği:', data);

        // UPDATE: employees.json dosyasını güncelle
        const updatedData = JSON.stringify({ name: "Employee 1 Name", salary: 3000 });
        fs.writeFile('employees.json', updatedData, 'utf8', (err) => {
            if (err) throw err;
            console.log('Dosya güncellendi.');

            // DELETE: employees.json dosyasını sil
            fs.unlink('employees.json', (err) => {
                if (err) throw err;
                console.log('Dosya silindi.');
            });
        });
    });
});
