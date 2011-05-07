require 'rubygems'
require 'cucumber'
require 'cucumber/rake/task'

task :default => ["features", "specs"]

Cucumber::Rake::Task.new(:features) do |t|
  t.cucumber_opts = "features --format pretty"
end

task :specs do
end
