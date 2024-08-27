<?php

namespace App\Console\Commands;

use App\Models\Page;
use Illuminate\Console\Command;

class AddPage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-page {user_id} {content}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $userId = $this->argument('user_id');
        $content = $this->argument('content');

        $page = new Page();
        $page->autor_user_id = $userId;
        $page->content = $content;

        $page->save();

        return 0;
    }
}
