import os


SQL_DIR_NAME = 'sql'
MIGRATION_FILE_NAME = 'index.sql'


def sort_by(e):
    return e['order']


def prepare_migration(dir):
    migration = []

    for name in dir:
        res = name.split('.')
        number = int(res[0][-2:])
        m = dict(file = name, order = number)
        migration.append(m)

    return migration


def make_migration(target):
    try:
        os.chdir('../')
        w = open(MIGRATION_FILE_NAME, 'w')

        for item in target:
            with open(f'{SQL_DIR_NAME}/{item["file"]}') as f:
                context = f.read()
                w.write(context)
        print('--------------------MIGRATION IS DONE SUCCESSFULLY--------------------')
    except Exception as exc:
        print('--------------------MIGRATION IS FAILED--------------------')
        print(exc)
    finally:
        w.close()


def main():
    os.chdir(SQL_DIR_NAME)
    list_dir = os.listdir()

    target = prepare_migration(list_dir)
    target.sort(reverse=False, key=sort_by)

    make_migration(target)


if __name__ == "__main__":
    main()